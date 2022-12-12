import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from '../theme/appTheme';
interface Props extends StackScreenProps<any, any> {}

export const Pagina2Screen = ({navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      title: 'hola mundo',
      headerBackTitle: '',
    });
  }, [navigation]);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina2Screen</Text>
      <Button
        title="Ir a pagina 3"
        onPress={() => navigation.navigate('Pagina3Screen')}
      />
      <Button title="Volver" onPress={() => navigation.goBack()} />
    </View>
  );
};
