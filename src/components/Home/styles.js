import styled from 'styled-components/native';
import {VERMELHO_CLARO_FUNDO} from '../utils/constants';

export const ContainerCategory = styled.View`
  width: auto;
  min-width: 100%;
  /* background-color: ${VERMELHO_CLARO_FUNDO}; */
  /* border-bottom-right-radius: 30px; */
  /* border-top-right-radius: 30px; */
`;

export const CategoryTitle = styled.Text`
  font-size: 25px;
  color: #fff;
  font-weight: 600;
  text-align: center;
  margin-left: -70px;
`;

export const CategoryGroup = styled.View`
  flex-direction: column;
  justify-content: center;
  align-self: center;
`;

export const Category = styled.View`
  padding-end: 20px;
  padding-top: 20%;
`;

export const Conteiner = styled.View`
  flex: 1;
  flex-direction: row;
`;
