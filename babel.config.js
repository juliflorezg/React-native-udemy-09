module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    //* reanimated plugin must be listed at last
    'react-native-reanimated/plugin',
  ],
};
