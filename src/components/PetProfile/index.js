import * as React from 'react';
import {Text} from 'react-native-paper';
import {ScrollView, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import axios from 'axios';
import _ from 'lodash';

import Header from '../Header';

function PetProfile({navigation, route}) {
  const [description, setDescription] = React.useState('');
  const [image, setImage] = React.useState('');
  const [id, setId] = React.useState();
  const [endereco, setEndereco] = React.useState('');
  const [localizacao, setLocalizacao] = React.useState();

  React.useEffect(() => {
    if (route?.params) {
      setId(route.params.id);
      setImage(route.params.url_image);
      setDescription(route.params.description);
      setLocalizacao({
        latitude: route.params.latitude,
        longitude: route.params.longitude,
      });
    }
  }, [route.params]);

  async function getAddress() {
    if (localizacao) {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${localizacao.latitude},${localizacao.longitude}&key=`,
      );
      setEndereco(
        _.get(response, 'data.results.0.formatted_address', 'Não encontrado'),
      );
    }
  }

  React.useEffect(() => {
    if (localizacao) {
      getAddress();
    }
  }, [localizacao]);

  return (
    <ScrollView>
      <Header navigation={navigation} title="Pet" />
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-around',
        }}>
        <FastImage
          key={id}
          style={{
            width: '90%',
            height: 300,
            marginLeft: '5%',
            borderRadius: 10,
          }}
          source={{
            uri: image,
          }}
        />

        <Text
          style={{
            fontSize: 25,
            width: '90%',
            minHeight: 100,
            marginLeft: '5%',
            marginTop: 20,
          }}>
          <Text style={{fontWeight: 'bold'}}>Descrição:</Text> {description}
        </Text>

        <Text
          style={{
            fontSize: 25,
            width: '90%',
            height: 300,
            marginLeft: '5%',
            marginTop: 20,
          }}>
          <Text style={{fontWeight: 'bold'}}>Endereço:</Text> {endereco}
        </Text>
      </View>
    </ScrollView>
  );
}

export default PetProfile;
