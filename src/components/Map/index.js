import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import MapView from 'react-native-maps';
import {Marker, Callout} from 'react-native-maps';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Map({positions, onMapLoad, navigation}) {
  const [position, setPosition] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const markerRef = React.useRef(null);

  React.useEffect(() => {
    setLoading(true);
    async function getCurrentPosition() {
      try {
        async function getPosition() {
          const latitude = await AsyncStorage.getItem('latitude');
          const longitude = await AsyncStorage.getItem('longitude');
          setPosition({
            latitude: parseFloat(latitude),
            longitude: parseFloat(longitude),
          });
        }
        getPosition();
      } catch (error) {
        setPosition({
          latitude: -23.123,
          longitude: -46.852,
        });
      } finally {
        setLoading(false);
      }
    }

    getCurrentPosition();
    setLoading(false);
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
      minHeight: 500,
    },
    plainView: {
      width: 150,
    },
  });

  if (!onMapLoad) {
    return <></>;
  }

  return (
    <>
      {!loading && !!position.longitude && (
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
              <Callout
                style={styles.plainView}
                onPress={() => navigation.navigate('PetProfile', posi)}>
                <View
                  style={{
                    width: 100,
                    minHeight: 50,
                  }}>
                  <Text>{posi.description}</Text>
                </View>
              </Callout>
            </Marker>
          ))}
        </MapView>
      )}
    </>
  );
}

export default Map;
