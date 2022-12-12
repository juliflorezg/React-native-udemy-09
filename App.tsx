import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StackNavigator} from './src/navigation/StackNavigator';
// import {Pagina1Screen} from './src/screens/Pagina1Screen';

const App = () => {
  return (
    <NavigationContainer>
      {/* <Text>Navigation</Text> */}
      {/* <Pagina1Screen /> */}
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
