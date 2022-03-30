import * as React from 'react';
import {ToastProvider} from 'react-native-toast-notifications';
import Router from './src/router';

function App() {
  return (
    <ToastProvider>
      <Router />
    </ToastProvider>
  );
}

export default App;
