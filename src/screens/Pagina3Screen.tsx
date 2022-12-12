import {useNavigation} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from '../theme/appTheme';
interface Props extends StackScreenProps<any, any> {}
export const Pagina3Screen = ({navigation}: Props) => {
  const navigator = useNavigation();

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina3Screen</Text>
      <Button title="Volver" onPress={() => navigator.goBack()} />
      <Button title="Volver a home" onPress={() => navigation.popToTop()} />
    </View>
  );
};
