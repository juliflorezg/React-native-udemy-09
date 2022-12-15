import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from '../theme/appTheme';
import {AuthContext} from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome5';

export const SettingsScreen = () => {
  const insets = useSafeAreaInsets();

  const {authState} = useContext(AuthContext);

  let icon;
  if (authState.favoriteIcon) {
    if (authState.iconLibrary === 'ionicons') {
      icon = <Icon name={authState.favoriteIcon} size={70} color="turquoise" />;
    } else if (authState.iconLibrary === 'fontawesome5') {
      icon = (
        <AwesomeIcon
          name={authState.favoriteIcon}
          size={70}
          color="turquoise"
        />
      );
    }
  }

  return (
    <View
      style={{
        ...styles.globalMargin,
        marginTop: insets.top + 20,
      }}>
      <Text style={styles.title}>Settings Screen</Text>
      <Text style={{fontSize: 24}}>{JSON.stringify(authState, null, 2)}</Text>

      {authState.isLoggedIn && icon}
    </View>
  );
};
