import * as React from 'react';
import {TextInput, HelperText, IconButton} from 'react-native-paper';
import {useToast} from 'react-native-toast-notifications';
import {
  Container,
  InputLoginGroup,
  ButtonLogin,
  ImageFootprint,
} from './styles';
import {images} from '../utils/constants';
import {Request} from '../utils/Request';

function Login({navigation}) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const toast = useToast();

  const login = async () => {
    try {
      const reponse = await Request.post('users/signin', {
        username: username,
        password: password,
      });
      if (reponse) {
        navigation.navigate('Home');
      }
    } catch (error) {
      toast.show('Falha no login', {
        type: 'warning',
        placement: 'top',
        duration: 4000,
        animationType: 'slide-in',
      });
    }
  };

  const hasErrors = () => {
    return false;
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
          autoCapitalize="none"
          value={username}
          onChangeText={value => setUsername(value)}
        />
        <HelperText type="error" visible={hasErrors()}>
          Email address is invalid!
        </HelperText>
        <TextInput
          onChangeText={value => setPassword(value)}
          label="Password"
          autoCapitalize="none"
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
