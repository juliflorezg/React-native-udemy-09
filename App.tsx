import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
// import {MenuLateralBasico} from './src/navigation/MenuLateralBasico';
import {MenuLateral} from './src/navigation/MenuLateral';
// import {Tabs} from './src/navigation/Tabs';
// import {StackNavigator} from './src/navigation/StackNavigator';
// import {Pagina1Screen} from './src/screens/Pagina1Screen';

const App = () => {
  return (
    <NavigationContainer>
      {/* <Text>Navigation</Text> */}
      {/* <Pagina1Screen /> */}
      {/* <StackNavigator /> */}
      {/* <MenuLateralBasico /> */}
      <MenuLateral />
      {/* <Tabs /> */}
    </NavigationContainer>
  );
};

export default App;
