import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Tab1Screen} from '../screens/Tab1Screen';
import {Tab2Screen} from '../screens/Tab2Screen';
// import {Tab3Screen} from '../screens/Tab3Screen';
import {StackNavigator} from './StackNavigator';
import {colores} from '../theme/appTheme';
import {Platform, Text, View} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {TopTabNavigator} from './TopTabNavigator';

export const Tabs = () => {
  return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndroid />;
};

const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      // activeColor="#e91e63"
      sceneAnimationEnabled={true}
      barStyle={{backgroundColor: colores.primary}}
      screenOptions={({route}) => ({
        // tabBarBadge: 'lol',
        tabBarColor: '#e91e63',
        // tabBarActiveTintColor: colores.primary,
        // tabBarInactiveTintColor: 'crimson',
        tabBarStyle: {
          elevation: 0,
          // borderTopColor: colores.primary,
          borderTopWidth: 0,
          // backgroundColor: colores.primary,
        },
        tabBarLabelStyle: {
          fontSize: 16,
          // backgroundColor: 'red',
        },
        tabBarIcon: ({color, focused}) => {
          console.log(route.name);
          console.log('Material tab icon-->:', {color, focused});
          // let iconName: string = '';

          // switch (route.name) {
          //   case 'Tab1Screen':
          //     iconName = 'T1';
          //     break;
          //   case 'Tab2Screen':
          //     iconName = 'T2';
          //     break;
          //   case 'StackNavigator':
          //     iconName = 'ST';
          //     break;
          // }
          const options: {[key: string]: string} = {
            // const options = {
            Tab1Screen: 'T1',
            Tab2Screen: 'T2',
            StackNavigator: 'ST',
          };

          return (
            <View>
              <Text
                style={{
                  color: focused ? '#390052' : '#000',
                  backgroundColor: colores.primary,
                }}>
                {/* {iconName} */}
                {/* the keys in this options object must be of type 'string' to
                be able to index the object with route.name property which is
                also of type 'string' */}
                {options[route.name]}
              </Text>
            </View>
          );
        },
      })}
      // style={{backgroundColor: colores.primary}}
    >
      <BottomTabAndroid.Screen
        name="Tab1Screen"
        // barStyle={{backgroundColor: colores.primary}}
        options={{
          title: 'Tab 1',
          // tabBarIcon: props => <Text style={{color: props.color}}>T1</Text>,
          tabBarColor: 'purple',
        }}
        component={Tab1Screen}
      />
      <BottomTabAndroid.Screen
        name="Tab2Screen"
        options={{title: 'Top Tabs'}}
        component={TopTabNavigator}
      />
      <BottomTabAndroid.Screen
        name="StackNavigator"
        options={{title: 'Stack'}}
        component={StackNavigator}
      />
    </BottomTabAndroid.Navigator>
  );
};

const BottomTabsIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <BottomTabsIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colores.primary,
        tabBarStyle: {
          elevation: 0,
          borderTopColor: colores.primary,
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          fontSize: 16,
        },
        tabBarIcon: ({color}) => {
          console.log(route.name);
          let iconName: string = '';

          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'T1';
              break;
            case 'Tab2Screen':
              iconName = 'T2';
              break;
            case 'StackNavigator':
              iconName = 'ST';
              break;
          }

          return <Text style={{color}}>{iconName}</Text>;
        },
      })}>
      <BottomTabsIOS.Screen
        name="Tab1Screen"
        options={{
          title: 'Tab 1',
          // tabBarIcon: props => <Text style={{color: props.color}}>T1</Text>,
        }}
        component={Tab1Screen}
      />
      <BottomTabsIOS.Screen
        name="Tab2Screen"
        options={{title: 'Tab 2'}}
        component={Tab2Screen}
      />
      <BottomTabsIOS.Screen
        name="StackNavigator"
        options={{title: 'Stack'}}
        component={StackNavigator}
      />
    </BottomTabsIOS.Navigator>
  );
};
