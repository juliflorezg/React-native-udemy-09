import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const PersonaScreen = ({navigation, route}: Props) => {
  console.log(route);

  //! manera sucia de obtener parametros
  const {params} = route;
  // console.log(JSON.stringify(rops, null, 2));

  useEffect(() => {
    navigation.setOptions({
      title: params!.nombre,
    });
  });
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{JSON.stringify(params, null, 2)}</Text>
    </View>
  );
};
