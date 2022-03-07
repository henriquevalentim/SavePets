import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import MapView from 'react-native-maps';
import {Marker, Callout} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {Container} from './styles';
import {positions} from '../utils/mock';

function Map({navigation}) {
  const [position, setPosition] = React.useState({});
  const markerRef = React.useRef(null);

  React.useEffect(() => {
    Geolocation.getCurrentPosition(info =>
      setPosition({
        latitude: info.coords.latitude,
        longitude: info.coords.longitude,
      }),
    );
  }, []);

  const onRegionChangeComplete = () => {
    if (markerRef && markerRef.current && markerRef.current.showCallout) {
      markerRef.current.showCallout();
    }
  };

  const styles = StyleSheet.create({
    map: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    plainView: {
      width: 60,
    },
  });
  return (
    <MapView
      onRegionChangeComplete={onRegionChangeComplete}
      style={styles.map}
      initialRegion={{
        latitude: position.latitude,
        longitude: position.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      {positions.map(posi => (
        <Marker
          ref={this.markerRef}
          coordinate={{
            latitude: posi.latitude,
            longitude: posi.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Callout style={styles.plainView}>
            <View>
              <Text>{posi.description}</Text>
            </View>
          </Callout>
        </Marker>
      ))}
    </MapView>
  );
}

export default Map;
