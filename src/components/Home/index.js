import * as React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {IconButton} from 'react-native-paper';
import {VERMELHO_CLARO_FUNDO} from '../utils/constants';

import {
  ContainerCategory,
  CategoryTitle,
  CategoryGroup,
  Category,
  Conteiner,
} from './styles';
import CategoryItem from '../CategoryItem';

function Home({navigation}) {
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
            </CategoryGroup>
          </Category>
        </ContainerCategory>
        <IconButton
          icon="account"
          color={VERMELHO_CLARO_FUNDO}
          size={40}
          onPress={() => navigation.navigate('Login')}
          style={{position: 'absolute', right: 0}}
        />
      </LinearGradient>
    </Conteiner>
  );
}

export default Home;
