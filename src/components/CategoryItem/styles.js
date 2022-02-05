import styled from 'styled-components/native';
import {CINZA_CLARO_FUNDO} from '../utils/constants';

export const Box = styled.View`
  flex-direction: row;
  background-color: ${CINZA_CLARO_FUNDO};
  height: 130px;
  width: 70%;
  min-width: 70%;
  border-radius: 25px;
  margin: 10px;
  margin-top: 70;
  margin-left: 50px;
`;

export const Circle = styled.View`
  background-color: '#FFF';
  width: 80px;
  height: 80px;
  border-radius: 50px;
  margin-top: 25px;
  margin-left: -30px;
`;

export const Image = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 25px;
`;

export const DescriptionBox = styled.View``;

export const TitlePosition = styled.View`
  flex: 1;
  width: 100%;
  max-height: 40px;
  flex-direction: row;
  justify-content: center;
  margin-left: -10px;
  margin-top: 5px;
`;

export const Title = styled.Text`
  font-size: 23px;
  font-weight: 600;
  color: #000;
`;

export const DescriptionPosition = styled.View`
  flex: 1;
  width: 100%;
  padding: 5px
  flex-direction: row;
  justify-content: center;
  /* margin-left: -10px; */
`;

export const Description = styled.Text`
  font-size: 12px;
  font-weight: 600;
  color: #000;
`;
