import styled from 'styled-components/native';
import {Button} from 'react-native-paper';
import {VERMELHO_CLARO_FUNDO, CINZA_CLARO_FUNDO} from '../utils/constants';

export const SendButton = styled(Button)`
  background-color: ${CINZA_CLARO_FUNDO};
  margin-top: 20px;
  border-radius: 20px;
`;

export const Content = styled.View`
  justify-content: center;
  height: 300px;
  align-items: center;
  margin: 10px;
  border-width: 2px;
  border-color: ${VERMELHO_CLARO_FUNDO};
  border-radius: 10px;
`;
