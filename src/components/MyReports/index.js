import * as React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Request} from '../utils/Request';
import Header from '../Header';
import ListPets from '../ListPets';

function MyReports({navigation}) {
  const [positions, setPositions] = React.useState();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function getAllPetsByIdUser() {
      try {
        const userData = await AsyncStorage.getItem('userData');
        const userDataFormated = JSON.parse(userData);

        const response = await Request.get(`locations/${userDataFormated.id}`);
        setPositions(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getAllPetsByIdUser();
  }, []);

  return (
    <>
      <Header navigation={navigation} title="Meus reportes" />

      {positions && !loading && <ListPets positions={positions} />}
    </>
  );
}

export default MyReports;
