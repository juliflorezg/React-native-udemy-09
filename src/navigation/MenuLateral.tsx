import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {StackNavigator} from './StackNavigator';
import {SettingsScreen} from '../screens/SettingsScreen';
import {
  Image,
  useWindowDimensions,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import {styles} from '../theme/appTheme';
import {createStackNavigator} from '@react-navigation/stack';

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();
const SettingsStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
    </Stack.Navigator>
  );
};

export const MenuLateral = () => {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: 'left',
        headerShown: false,
        drawerType: width >= 768 ? 'permanent' : 'front',
        // drawerType: 'back',
      }}
      drawerContent={(props: any) => <MenuContent {...props} />}>
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen" component={SettingsStackScreen} />
    </Drawer.Navigator>
  );
};

const MenuContent = ({navigation}: DrawerContentComponentProps) => {
  console.log(navigation);
  return (
    <DrawerContentScrollView>
      {/* seccion de avatar */}
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
          }}
          style={styles.avatar}
        />
      </View>
      {/* opciones del menú*/}
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuBoton}
          onPress={() => navigation.navigate('StackNavigator')}>
          <Text style={styles.menuTexto}>Navegación</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuBoton}
          onPress={() => navigation.navigate('SettingsScreen')}>
          <Text style={styles.menuTexto}>Ajustes</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
