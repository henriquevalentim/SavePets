import * as React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {IconButton} from 'react-native-paper';
import Geolocation from '@react-native-community/geolocation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {VERMELHO_CLARO_FUNDO, images} from '../utils/constants';

import {
  ContainerCategory,
  CategoryTitle,
  CategoryGroup,
  Category,
  Conteiner,
} from './styles';
import CategoryItem from '../CategoryItem';

function Home({navigation}) {
  React.useEffect(() => {
    try {
      Geolocation.getCurrentPosition(info => {
        if (info && info.coords && info.coords.latitude) {
          AsyncStorage.setItem('latitude', info.coords.latitude.toString());
          AsyncStorage.setItem('longitude', info.coords.longitude.toString());
        } else {
          // mock para quando o usuario não permite a utilização da localição
          AsyncStorage.setItem('latitude', (-23.123).toString());
          AsyncStorage.setItem('longitude', (-46.582).toString());
        }
      });
    } catch (error) {
      // mock para quando o usuario não permite a utilização da localição
      AsyncStorage.setItem('latitude', (-23.123).toString());
      AsyncStorage.setItem('longitude', (-46.582).toString());
    }
  }, []);

  return (
    <Conteiner>
      <LinearGradient
        colors={[VERMELHO_CLARO_FUNDO, '#FFF']}
        locations={[0.0, 0.0]}
        start={{x: 0.6, y: 0}}
        end={{x: 1, y: 0}}>
        <ContainerCategory>
          <Category>
            <CategoryTitle>Categorias</CategoryTitle>
            <CategoryGroup>
              <CategoryItem
                navigate={() => navigation.navigate('Map')}
                title={'Localidade'}
                description={'Encontre animais perto da sua região'}
                image={images.map}
                size={90}
              />
              <CategoryItem
                navigate={() => navigation.navigate('Report')}
                title={'Reporte'}
                description={
                  'Reporte imagens sobre animais que precisam de ajuda'
                }
                image={images.donation}
                size={80}
              />
              <CategoryItem
                navigate={() => navigation.navigate('Donate')}
                title={'Doação'}
                description={
                  'Encontre instituições de adoação de animais e ajudem-os'
                }
                image={images.donate}
                size={80}
              />
            </CategoryGroup>
          </Category>
        </ContainerCategory>

        {/* <IconButton
            icon="account"
            color={VERMELHO_CLARO_FUNDO}
            size={40}
            onPress={() => navigation.navigate('Login')}
            style={{position: 'absolute', right: 0}}
          /> */}
      </LinearGradient>
    </Conteiner>
  );
}

export default Home;
