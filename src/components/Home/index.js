import * as React from 'react';
import {View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {Container, CategoryTitle} from './styles';
import CategoryItem from '../CategoryItem';

function Home() {
  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <LinearGradient
        colors={['#ED634B', '#FFF']}
        locations={[0.0, 0.0]}
        start={{x: 0.6, y: 0}}
        end={{x: 1, y: 0}}>
        <Container>
          <View
            style={{
              paddingEnd: 20,
              paddingTop: '20%',
            }}>
            <CategoryTitle>Categorias</CategoryTitle>
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignSelf: 'center',
              }}>
              <CategoryItem
                title={'Localidade'}
                description={'Encontre animais perto da sua região'}
              />
              <CategoryItem
                title={'Reporte'}
                description={
                  'Reporte imagens sobre animais que precisam de ajuda'
                }
              />
              <CategoryItem
                title={'Doação'}
                description={
                  'Encontre instituições de adoação de animais e ajudem-os'
                }
              />
            </View>
          </View>
        </Container>
      </LinearGradient>
    </View>
  );
}

export default Home;
