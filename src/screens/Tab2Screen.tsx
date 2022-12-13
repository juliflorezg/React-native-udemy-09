import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
export const Tab2Screen = () => {
  // effect is shown just the first time, when component is mounted, it doesn't show again when we focus this tab
  useEffect(() => {
    console.log('Tab2Screen is mounted!!!!!!');
  }, []);
  return (
    <View>
      <Text>Tab 2 Screen</Text>
    </View>
  );
};
