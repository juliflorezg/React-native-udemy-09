import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {colores, styles} from '../theme/appTheme';

import Icon from 'react-native-vector-icons/Ionicons';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome5';
{
  /* <Icon name="rocket" size={30} color="#900" />; */
}

export const Tab1Screen = () => {
  // effect is shown just the first time, when component is mounted, it doesn't show again when we focus this tab
  useEffect(() => {
    console.log('Tab1Screen is mounted!!!!!!');
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Iconos</Text>
      {/*  */}
      <Icon name="rocket" size={50} color="#900" />
      <Icon name="airplane" size={50} color="#900" />
      <View
        style={{
          backgroundColor: '#333',
          flexDirection: 'row',
          padding: 5,
          justifyContent: 'center',
          marginBottom: 15,
        }}>
        <Icon name="heart" size={50} color="#ff0000" />
        <Icon name="logo-javascript" size={50} color="#fbff00" />
      </View>

      <View
        style={{
          backgroundColor: '#252020',
          flexDirection: 'row',
          padding: 5,
          justifyContent: 'space-evenly',
          marginBottom: 15,
        }}>
        <Icon name="heart-circle-outline" size={50} color="#ff00dd" />
        <Icon name="logo-react" size={50} color="#00a6ff" />
      </View>
      <Text>
        <Icon name="airplane" size={50} color={colores.primary} />
        <Icon name="finger-print-outline" size={50} color={colores.primary} />
        <AwesomeIcon name="rocket" size={50} color="#000000" />
        <AwesomeIcon name="wind" size={50} color="#000000" />
      </Text>
    </View>
  );
};
