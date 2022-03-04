import * as React from 'react';
import {WebView} from 'react-native-webview';

function Donate() {
  return (
    <WebView
      source={{
        uri: 'https://www.petlove.com.br/doacoes',
      }}
    />
  );
}

export default Donate;
