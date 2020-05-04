import React from 'react';
import { useCountRenders } from '../../utils/hooks';
import AppNavigationContainer from './AppNavigationContainer';

const AppNavigator = () => {
  useCountRenders('APP_NAVIGATOR');
  return <AppNavigationContainer />;
};

export default AppNavigator;
