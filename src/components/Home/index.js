import * as React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {View} from 'react-native';
import {IconButton, Menu} from 'react-native-paper';
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

  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const logout = async () => {
    AsyncStorage.clear();
    navigation.replace('Login');
  };

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
                navigate={() => navigation.navigate('NavigationMap')}
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

        <View
          style={{
            position: 'absolute',
            right: 10,
            top: 10,
          }}>
          <Menu
            visible={visible}
            style={{paddingTop: 60, marginRight: 60}}
            onDismiss={closeMenu}
            anchor={
              <IconButton
                icon="account"
                color={VERMELHO_CLARO_FUNDO}
                size={40}
                onPress={openMenu}
              />
            }>
            <Menu.Item
              onPress={() => {
                setVisible(false);
                navigation.navigate('MyReports');
              }}
              title="Meus reportes"
            />
            <Menu.Item onPress={() => logout()} title="Sair" />
          </Menu>
        </View>
      </LinearGradient>
    </Conteiner>
  );
}

export default Home;
