import * as React from 'react';
import {BottomNavigation} from 'react-native-paper';

import Map from '../Map';
import ListPets from '../ListPets';
import {Request} from '../utils/Request';

const NavigationMap = () => {
  const [index, setIndex] = React.useState(0);
  const [positions, setPositions] = React.useState([]);
  const [onMapLoad, setOnMapLoad] = React.useState(true);
  const [routes] = React.useState([
    {
      key: 'map',
      title: 'Mapa',
      icon: 'map',
    },
    {
      key: 'list',
      title: 'Lista',
      icon: 'view-list',
    },
  ]);

  React.useEffect(() => {
    if (index) {
      setOnMapLoad(false);
    } else {
      setOnMapLoad(true);
    }
  }, [index]);

  const MapRoute = () => <Map positions={positions} onMapLoad={onMapLoad} />;
  const ListRoute = () => (
    <ListPets positions={positions} title="Animais perdidos" />
  );

  React.useEffect(() => {
    async function getAllPosition() {
      const response = await Request.get('locations/');
      setPositions(response.data);
    }

    getAllPosition();
  }, []);

  const renderScene = BottomNavigation.SceneMap({
    map: MapRoute,
    list: ListRoute,
  });

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default NavigationMap;
