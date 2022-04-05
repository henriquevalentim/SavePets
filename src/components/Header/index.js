import * as React from 'react';
import {IconButton, Title} from 'react-native-paper';
import {Container, ContentPosition, TitleHeader} from './styles';

function Header({navigation, title}) {
  return (
    <Container>
      <ContentPosition>
        <IconButton
          icon="arrow-left"
          color={'#FFF'}
          size={40}
          onPress={() => navigation.navigate('Home')}
          style={{marginLeft: 10}}
        />
        <TitleHeader>{title}</TitleHeader>
      </ContentPosition>
    </Container>
  );
}

export default Header;
