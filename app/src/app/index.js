import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import store from '../services/redux/store';
import AppBase from './AppBase';
import AppLifecycleManager from './AppLifecycleManager';

const App = () => (
  <Provider store={store}>
    <SafeAreaProvider>
      <AppLifecycleManager />
      <AppBase />
    </SafeAreaProvider>
  </Provider>
);

export default App;
