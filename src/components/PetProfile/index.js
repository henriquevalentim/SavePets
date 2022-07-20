import * as React from 'react';
import {Text} from 'react-native-paper';
import {View} from 'react-native';
import FastImage from 'react-native-fast-image';

import Header from '../Header';

function PetProfile({navigation, route}) {
  const [description, setDescription] = React.useState('');
  const [image, setImage] = React.useState('');
  const [id, setId] = React.useState();

  React.useEffect(() => {
    if (route?.params) {
      setId(route.params.id);
      setImage(route.params.url_image);
      setDescription(route.params.description);
    }
  }, [route.params]);

  return (
    <>
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
          style={{fontSize: 25, width: '90%', height: 300, marginLeft: '5%'}}>
          {description}
        </Text>
      </View>
    </>
  );
}

export default PetProfile;
