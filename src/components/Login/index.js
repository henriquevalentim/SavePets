import * as React from 'react';
import {TextInput, HelperText, IconButton, Snackbar} from 'react-native-paper';
import {
  Container,
  InputLoginGroup,
  ButtonLogin,
  ImageFootprint,
} from './styles';
import {images} from '../utils/constants';

function Login({navigation}) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const hasErrors = () => {
    return false;
  };

  const login = () => {
    if (username === 'Root' && password === '1234') {
      navigation.navigate('Home');
    }
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
        <TextInput
          label="Email"
          value={username}
          onChangeText={value => setUsername(value)}
        />
        <HelperText type="error" visible={hasErrors()}>
          Email address is invalid!
        </HelperText>
        <TextInput
          onChangeText={value => setPassword(value)}
          label="Password"
          secureTextEntry
          right={<TextInput.Icon name="eye" />}
        />
        <ButtonLogin icon="dog" mode="outlined" onPress={() => login()}>
          Entrar
        </ButtonLogin>
        <ButtonLogin
          icon="dog"
          mode="outlined"
          onPress={() => navigation.navigate('Register')}>
          Registrar-se
        </ButtonLogin>
      </InputLoginGroup>
    </Container>
  );
}

export default Login;
