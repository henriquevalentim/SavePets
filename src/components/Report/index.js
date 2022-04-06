import * as React from 'react';
import {TextInput, IconButton} from 'react-native-paper';
import {useToast} from 'react-native-toast-notifications';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Image} from 'react-native';
import {VERMELHO_CLARO_FUNDO} from '../utils/constants';
import {SendButton, Content} from './styles';
import {Request} from '../utils/Request';
import Header from '../Header';
import Camera from './subcomponents/Camera';

function Report({navigation}) {
  const [description, setDescription] = React.useState('');
  const [image, setImage] = React.useState('');
  const [isCam, setIsCam] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const toast = useToast();

  const saveReport = async () => {
    setLoading(true);
    if (!description && !image) {
      toast.show('Preencha todas as informações', {
        type: 'warning',
        placement: 'top',
        duration: 4000,
        animationType: 'slide-in',
      });
      return;
    }

    const latitude = await AsyncStorage.getItem('latitude');
    const longitude = await AsyncStorage.getItem('longitude');

    const body = {
      latitude,
      longitude,
      description,
      image,
    };
    const response = await Request.post('locations/', body);
    toast.show('Foto registrada com sucesso', {
      type: 'success',
      placement: 'top',
      duration: 4000,
      animationType: 'slide-in',
    });
    setDescription('');
    setImage('');
    setIsCam(false);
    setLoading(false);
  };

  return (
    <>
      {!!isCam ? (
        <Camera
          setImage={value => setImage(value)}
          closeCam={() => setIsCam(false)}
        />
      ) : (
        <>
          <Header navigation={navigation} title="Reporte" />
          <Content>
            {!!image ? (
              <Image
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 8,
                }}
                source={{uri: image}}
              />
            ) : (
              <IconButton
                icon="camera"
                color={VERMELHO_CLARO_FUNDO}
                size={40}
                onPress={() => setIsCam(true)}
              />
            )}
          </Content>
          <TextInput
            label="Informe detalhes sobre o animal"
            style={{margin: 13}}
            autoCapitalize="none"
            multiline={true}
            numberOfLines={3}
            value={description}
            onChangeText={value => setDescription(value)}
          />
          <SendButton
            style={{margin: 13}}
            icon="dog"
            mode="outlined"
            disabled={loading}
            onPress={() => saveReport()}>
            Enviar
          </SendButton>
        </>
      )}
    </>
  );
}

export default Report;
