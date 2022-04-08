import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './components/Home';
import Login from './components/Login';
import Donate from './components/Donate';
import Register from './components/Register';
import NavigationMap from './components/NavigationMap';
import Report from './components/Report';
import Camera from './components/Report/subcomponents/Camera';

const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Login">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Donate" component={Donate} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="NavigationMap" component={NavigationMap} />
        <Stack.Screen name="Report" component={Report} />
        <Stack.Screen name="Camera" component={Camera} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
