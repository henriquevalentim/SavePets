import * as React from 'react';
import {IconButton, Colors} from 'react-native-paper';
import {VERMELHO_CLARO_FUNDO} from '../../../utils/constants';

const Camera = () => (
  <IconButton
    icon="camera"
    color={VERMELHO_CLARO_FUNDO}
    size={40}
    onPress={() => console.log('Pressed')}
  />
);

export default Camera;
