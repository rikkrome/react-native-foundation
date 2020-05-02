import React from 'react';
import { View } from 'react-native';
import { useCountRenders, useAppState } from '../../utils/hooks';

const AppLifecycleManager = () => {
  useCountRenders('AppLifecycleManager');
  useAppState();
  return <View />;
};

export default AppLifecycleManager;
