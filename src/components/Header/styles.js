import styled from 'styled-components/native';
import {Title} from 'react-native-paper';
import {VERMELHO_CLARO_FUNDO} from '../utils/constants';

export const Container = styled.View`
  background-color: ${VERMELHO_CLARO_FUNDO};
  height: 10%;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
`;

export const ContentPosition = styled.View`
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

export const TitleHeader = styled(Title)`
  text-align: center;
  position: absolute;
  width: 100%;
  color: #fff;
`;
