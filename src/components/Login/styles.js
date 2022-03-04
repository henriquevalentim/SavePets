import styled from 'styled-components/native';
import {Button} from 'react-native-paper';
import {VERMELHO_CLARO_FUNDO, CINZA_CLARO_FUNDO} from '../utils/constants';

export const Container = styled.View`
  flex: 1;
  background-color: ${VERMELHO_CLARO_FUNDO};
`;

export const InputLoginGroup = styled.View`
  flex: 1;
  width: 80%;
  flex-direction: column;
  justify-content: center;
  align-self: center;
`;

export const ButtonLogin = styled(Button)`
  background-color: ${CINZA_CLARO_FUNDO};
  margin-top: 20px;
  border-radius: 20px;
`;

export const ImageFootprint = styled.Image`
  width: 350px;
  height: 350px;
  align-self: center;
  tint-color: ${CINZA_CLARO_FUNDO};
`;
