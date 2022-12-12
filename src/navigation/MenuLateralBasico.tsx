import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {StackNavigator} from './StackNavigator';
import {SettingsScreen} from '../screens/SettingsScreen';
import {useWindowDimensions} from 'react-native';

const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () => {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: 'left',
        headerShown: false,
        drawerType: width >= 768 ? 'permanent' : 'front',
        // drawerType: 'back',
      }}>
      <Drawer.Screen
        name="StackNavigator"
        component={StackNavigator}
        options={{title: 'Home'}}
      />
      <Drawer.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{title: 'Settings'}}
      />
    </Drawer.Navigator>
  );
};
