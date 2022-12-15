import {StackScreenProps} from '@react-navigation/stack';
import React, {useContext, useEffect} from 'react';
import {View, Text} from 'react-native';
import {RootStackParams} from '../navigation/StackNavigator';
import {styles} from '../theme/appTheme';
import {AuthContext} from '../context/AuthContext';

// interface RouteParams {
//   id: number;
//   nombre: string;
// }

//* manera adecuada de obtener parámetros (usando TIPO en la configuración del stack, importándolo acá y usando el nombre de la ruta)
interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> {}

export const PersonaScreen = ({navigation, route}: Props) => {
  console.log(route);

  const {setUsername} = useContext(AuthContext);

  const params = route.params;
  // console.log(JSON.stringify(rops, null, 2));

  useEffect(() => {
    navigation.setOptions({
      title: params.nombre,
    });
  });

  useEffect(() => {
    setUsername(params.nombre);
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{JSON.stringify(params, null, 2)}</Text>
    </View>
  );
};
