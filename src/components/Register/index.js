import * as React from 'react';
import {TextInput, HelperText, IconButton} from 'react-native-paper';
import {
  Container,
  InputLoginGroup,
  ButtonLogin,
  ImageFootprint,
  Input
} from './styles';
import {images} from '../utils/constants';

function Register({navigation}) {
  return (
    <Container>
      <IconButton
        icon="arrow-left"
        color={'#FFF'}
        size={40}
        onPress={() => navigation.navigate('Home')}
        style={{position: 'absolute'}}
      />
      <InputLoginGroup>
        <ImageFootprint source={images.bigFootprint} />
        <Input label="Nome" />
        <Input label="Email" />
        <Input
          label="Senha"
          secureTextEntry
          right={<TextInput.Icon name="eye" />}
        />
        <Input
          label="Confirma senha"
          secureTextEntry
          right={<TextInput.Icon name="eye" />}
        />
        <ButtonLogin
          icon="dog"
          mode="outlined"
          onPress={() => navigation.navigate('Home')}>
          Cadastrar
        </ButtonLogin>
        <ButtonLogin
          icon="dog"
          mode="outlined"
          onPress={() => navigation.navigate('Login')}>
          Já tenho uma conta
        </ButtonLogin>
      </InputLoginGroup>
    </Container>
  );
}

export default Register;
