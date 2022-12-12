import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const Pagina1Screen = ({navigation}: Props) => {
  console.log(navigation);
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
          <Text style={styles.botonGrandeTexto}>LOL</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
