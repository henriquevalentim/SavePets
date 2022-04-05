import * as React from 'react';
import {TextInput, IconButton} from 'react-native-paper';
import {useToast} from 'react-native-toast-notifications';
import {View} from 'react-native';
import {VERMELHO_CLARO_FUNDO} from '../utils/constants';
import {
  Container,
  InputLoginGroup,
  ButtonLogin,
  ImageFootprint,
  Input,
} from './styles';
import {images} from '../utils/constants';
import {Request} from '../utils/Request';
import Header from '../Header';
import Camera from './subcomponents/Camera';

function Report({navigation}) {
  const [name, setName] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [securePassword, setSecurePassword] = React.useState(true);
  const [secureConfirmPassword, setSecureConfirmPassword] =
    React.useState(true);
  const toast = useToast();

  return (
    <>
      <Header navigation={navigation} title="Reporte" />
      <View
        style={{
          justifyContent: 'center',
          height: 500,
          alignItems: 'center',
          margin: 10,
          borderWidth: 2,
          borderColor: VERMELHO_CLARO_FUNDO,
          borderRadius: 10,
        }}>
        <Camera />
      </View>
    </>
  );
}

export default Report;
