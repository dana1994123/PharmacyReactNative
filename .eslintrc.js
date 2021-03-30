module.exports = {
  root: true,
  extends: '@react-native-community',
  presets: ['stage-0', ['es2015', {modules: false}], 'react'],
  plugins: ['transform-class-properties'],
};
