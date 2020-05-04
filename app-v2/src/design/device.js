// DESIGN - DEVICE SPECS
// v1.0

import {Dimensions, Platform, PixelRatio} from 'react-native';

// EXPOSES DEVICE SPECS
// NOTE: https://stackoverflow.com/questions/44978804/whats-the-difference-between-window-and-screen-in-the-dimensions-api
//
const device = {
  windowHeight: Dimensions.get('window').height,
  windowWidth: Dimensions.get('window').width,
  screenHeight: Dimensions.get('screen').height,
  screenWidth: Dimensions.get('screen').width,
  isIOS: Platform.OS === 'ios',
  isAndroid: Platform.OS === 'android',
  version: parseInt(Platform.Version, 10),
  scaleFactor: PixelRatio.get(), // See: https://blog.prototypr.io/making-sense-of-device-resolution-pixel-density-40922aeb8a6
};

export default device;
