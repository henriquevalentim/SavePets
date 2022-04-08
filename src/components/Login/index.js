import * as React from 'react';
import {TextInput, HelperText} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
  const [loading, setLoading] = React.useState(false);
  const [securePassword, setSecurePassword] = React.useState(true);
  const toast = useToast();

  const login = async () => {
    try {
      setLoading(true);
      if (!username && !password) {
        toast.show('Preencha todas as informações', {
          type: 'warning',
          placement: 'top',
          duration: 4000,
          animationType: 'slide-in',
        });
        return;
      }
      const reponse = await Request.post('users/signin', {
        username: username,
        password: password,
      });
      setUsername('');
      setPassword('');
      if (reponse) {
        await AsyncStorage.setItem('username', reponse.data.username);
        navigation.navigate('Home');
      }
    } catch (error) {
      toast.show('Falha no login', {
        type: 'warning',
        placement: 'top',
        duration: 4000,
        animationType: 'slide-in',
      });
    } finally {
      setLoading(false);
    }
  };

  const hasErrors = () => {
    return false;
  };

  return (
    <Container>
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
          secureTextEntry={securePassword}
          right={
            <TextInput.Icon
              name="eye"
              onPress={() => setSecurePassword(!securePassword)}
            />
          }
        />
        <ButtonLogin
          icon="dog"
          mode="outlined"
          disabled={loading}
          onPress={() => login()}>
          Entrar
        </ButtonLogin>
        <ButtonLogin
          icon="dog"
          mode="outlined"
          disabled={loading}
          onPress={() => navigation.navigate('Register')}>
          Registrar-se
        </ButtonLogin>
      </InputLoginGroup>
    </Container>
  );
}

export default Login;
