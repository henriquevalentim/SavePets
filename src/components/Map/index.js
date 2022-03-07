import * as React from 'react';
import {StyleSheet} from 'react-native';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {Container} from './styles';
import {positions} from '../utils/mock';

function Map({navigation}) {
  const [position, setPosition] = React.useState({});

  React.useEffect(() => {
    Geolocation.getCurrentPosition(info =>
      setPosition({
        latitude: info.coords.latitude,
        longitude: info.coords.longitude,
      }),
    );
  }, []);

  const styles = StyleSheet.create({
    map: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
  });
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: position.latitude,
        longitude: position.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      {positions.map(posi => (
        <Marker
          coordinate={{
            latitude: posi.latitude,
            longitude: posi.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      ))}
    </MapView>
  );
}

export default Map;
