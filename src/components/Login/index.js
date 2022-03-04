import * as React from 'react';
import {TextInput, HelperText, IconButton} from 'react-native-paper';
import {
  Container,
  InputLoginGroup,
  ButtonLogin,
  ImageFootprint,
} from './styles';
import {images, VERMELHO_CLARO_FUNDO} from '../utils/constants';

function Login({navigation}) {
  const [text, setText] = React.useState('');
  const onChangeText = text => setText(text);

  const hasErrors = () => {
    return !text.includes('@') && text.length;
  };

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
        <TextInput label="Email" value={text} onChangeText={onChangeText} />
        <HelperText type="error" visible={hasErrors()}>
          Email address is invalid!
        </HelperText>
        <TextInput
          label="Password"
          secureTextEntry
          right={<TextInput.Icon name="eye" />}
        />
        <ButtonLogin
          icon="dog"
          mode="outlined"
          onPress={() => console.log('Pressed')}>
          Entrar
        </ButtonLogin>
        <ButtonLogin
          icon="dog"
          mode="outlined"
          onPress={() => console.log('Pressed')}>
          Registrar-se
        </ButtonLogin>
      </InputLoginGroup>
    </Container>
  );
}

export default Login;
