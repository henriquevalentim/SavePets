import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import {Container} from './styles';

function Map({navigation}) {
  const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
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
        latitude: -23.52278,
        longitude: -46.18833,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      <Marker
        coordinate={{
          latitude: -23.52278,
          longitude: -46.18833,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <Marker
        coordinate={{
          latitude: -20.52278,
          longitude: -46.18833,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <Marker
        coordinate={{
          latitude: -23.52278,
          longitude: -40.18833,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </MapView>
  );
}

export default Map;
