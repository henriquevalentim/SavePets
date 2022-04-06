import * as React from 'react';
import {TextInput, IconButton} from 'react-native-paper';
import {useToast} from 'react-native-toast-notifications';
import {
  Container,
  InputLoginGroup,
  ButtonLogin,
  ImageFootprint,
  Input,
} from './styles';
import {images} from '../utils/constants';
import {Request} from '../utils/Request';

function Register({navigation}) {
  const [name, setName] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [securePassword, setSecurePassword] = React.useState(true);
  const [secureConfirmPassword, setSecureConfirmPassword] =
    React.useState(true);
  const toast = useToast();

  const register = async () => {
    try {
      if (!name || !username || !password || !confirmPassword) {
        toast.show('Todos os campos são obrigatórios', {
          type: 'warning',
          placement: 'top',
          duration: 4000,
          animationType: 'slide-in',
        });
        return;
      }

      if (password !== confirmPassword) {
        toast.show('Senha diferente', {
          type: 'warning',
          placement: 'top',
          duration: 4000,
          animationType: 'slide-in',
        });
        return;
      }

      const reponse = await Request.post('users/signup', {
        name,
        username,
        password,
      });
      if (reponse) {
        navigation.navigate('Login');
      }
    } catch (error) {
      toast.show('Erro, tente novamente mais tarde', {
        type: 'warning',
        placement: 'top',
        duration: 4000,
        animationType: 'slide-in',
      });
    }
  };

  return (
    <Container>
      <IconButton
        icon="arrow-left"
        color={'#FFF'}
        size={40}
        onPress={() => navigation.navigate('Login')}
        style={{position: 'absolute'}}
      />
      <InputLoginGroup>
        <ImageFootprint source={images.bigFootprint} />
        <Input
          label="Nome"
          autoCapitalize="none"
          value={name}
          onChangeText={value => setName(value)}
        />
        <Input
          label="Email"
          value={username}
          autoCapitalize="none"
          onChangeText={value => setUsername(value)}
        />
        <Input
          label="Senha"
          secureTextEntry={securePassword}
          value={password}
          autoCapitalize="none"
          onChangeText={value => setPassword(value)}
          right={
            <TextInput.Icon
              name="eye"
              onPress={() => setSecurePassword(!securePassword)}
            />
          }
        />
        <Input
          label="Confirma senha"
          secureTextEntry={secureConfirmPassword}
          value={confirmPassword}
          autoCapitalize="none"
          onChangeText={value => setConfirmPassword(value)}
          right={
            <TextInput.Icon
              name="eye"
              onPress={() => setSecureConfirmPassword(!secureConfirmPassword)}
            />
          }
        />
        <ButtonLogin icon="dog" mode="outlined" onPress={() => register()}>
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
