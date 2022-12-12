import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {styles} from '../theme/appTheme';

interface RouteParams {
  id: number;
  nombre: string;
}

interface Props extends StackScreenProps<any, any> {}

export const PersonaScreen = ({navigation, route}: Props) => {
  console.log(route);

  //! manera no tan sucia de obtener parametros (usando interface y la keyword as (type casting))
  const params = route.params as RouteParams;
  // console.log(JSON.stringify(rops, null, 2));

  useEffect(() => {
    navigation.setOptions({
      title: params.nombre,
    });
  });
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{JSON.stringify(params, null, 2)}</Text>
    </View>
  );
};
