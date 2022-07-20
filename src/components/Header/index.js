import * as React from 'react';
import {IconButton} from 'react-native-paper';
import {Container, ContentPosition, TitleHeader} from './styles';

function Header({navigation, title}) {
  return (
    <Container>
      <ContentPosition>
        <TitleHeader>{title}</TitleHeader>
        <IconButton
          icon="arrow-left"
          color={'#FFF'}
          size={40}
          onPress={() => navigation.goBack()}
        />
      </ContentPosition>
    </Container>
  );
}

export default Header;
