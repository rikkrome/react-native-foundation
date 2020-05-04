import React from 'react';
import { View } from 'react-native';
import AppNavigator from '../AppNavigator';

const AppBase = () => (
  <View style={{ flex: 1 }}>
    <AppNavigator />
  </View>
);

export default AppBase;
