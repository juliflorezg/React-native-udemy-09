import {DrawerScreenProps} from '@react-navigation/drawer';
// import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {styles} from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

// interface Props extends StackScreenProps<any, any> {}
interface Props extends DrawerScreenProps<any, any> {}

export const Pagina1Screen = ({navigation}: Props) => {
  console.log(navigation);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Icon name="menu" size={30} color="#000" />
          {/* <Button title="Menú" onPress={() => navigation.openDrawer()} /> */}
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina1Screen</Text>
      <Button
        title="Ir a pagina 2"
        onPress={() => navigation.navigate('Pagina2Screen')}
      />
      {/* <Button
        title="ir a perfil"
        onPress={() => navigation.navigate('PersonaScreen')}
      /> */}
      <Text>Navegando con argumentos</Text>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 69,
              nombre: 'pedro',
            })
          }
          style={styles.botonGrande}>
          <Icon name="person-circle" size={40} color="#fff" />
          <Text style={styles.botonGrandeTexto}>Pedro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 777,
              nombre: 'lol',
            })
          }
          style={styles.botonGrande}>
          <Icon name="happy-outline" size={40} color="#fff" />
          <Text style={styles.botonGrandeTexto}>LOL</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
