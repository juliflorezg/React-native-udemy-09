import React, {useContext} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import {AuthContext} from '../context/AuthContext';

interface Props {
  library: 'ionicons' | 'fontawesome5';
  name: string;
  size: number;
  color: string;
}

export const TouchableIcon = ({library, name, size, color}: Props) => {
  let icon: JSX.Element = <Text>Custom Icon</Text>;
  const {setFavoriteIcon} = useContext(AuthContext);

  if (library === 'ionicons') {
    icon = (
      <TouchableOpacity onPress={() => setFavoriteIcon(name, library)}>
        <Icon name={name} size={size} color={color} />
      </TouchableOpacity>
    );
    return icon;
  }
  if (library === 'fontawesome5') {
    icon = (
      <TouchableOpacity onPress={() => console.log(name)}>
        <AwesomeIcon name={name} size={size} color={color} />
      </TouchableOpacity>
    );
    return icon;
  }

  return icon;
};
