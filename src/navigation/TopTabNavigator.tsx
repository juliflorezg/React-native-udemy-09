import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ChatScreen} from '../screens/ChatScreen';
import {ContactsScreen} from '../screens/ContactsScreen';
import {AlbumsScreen} from '../screens/AlbumsScreen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colores} from '../theme/appTheme';
// import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {View} from 'react-native';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  const {top} = useSafeAreaInsets();

  return (
    <Tab.Navigator
      style={{paddingTop: top + 20}}
      sceneContainerStyle={{backgroundColor: 'white'}}
      screenOptions={({route}) => ({
        // lazy: route.name === ''
        tabBarPressColor: colores.primary,
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: colores.primary,
        },
        tabBarStyle: {
          elevation: 0,
          shadowColor: 'transparent', //ios specific
        },
        tabBarIcon: ({color}) => {
          const options: {[key: string]: string} = {
            // const options = {
            Tab1Screen: 'chatbubble-outline',
            Tab2Screen: 'people-outline',
            StackNavigator: 'images-outline',
          };

          return (
            <View>
              <Icon
                //   the keys in this options object must be of type 'string' to
                //   be able to index the object with route.name property which is
                // also of type 'string'
                name={options[route.name]}
                size={20}
                color={color}
              />
              {/* {iconName}
                {options[route.name]} */}
            </View>
          );
        },
      })}>
      <Tab.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{title: 'Chat'}}
      />
      <Tab.Screen name="ContactsScreen" component={ContactsScreen} />
      <Tab.Screen name="AlbumsScreen" component={AlbumsScreen} />
    </Tab.Navigator>
  );
};
