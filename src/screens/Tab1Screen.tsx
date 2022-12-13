import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
export const Tab1Screen = () => {
  // effect is shown just the first time, when component is mounted, it doesn't show again when we focus this tab
  useEffect(() => {
    console.log('Tab1Screen is mounted!!!!!!');
  }, []);

  return (
    <View>
      <Text>Tab 1 Screen</Text>
    </View>
  );
};
