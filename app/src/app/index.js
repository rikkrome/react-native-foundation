import React from 'react';
import { Provider } from 'react-redux';
import store from '../services/redux/store';
import AppBase from './AppBase';
import AppLifecycleManager from './AppLifecycleManager';

const App = () => (
  <Provider store={store}>
    <AppLifecycleManager />
    <AppBase />
  </Provider>
);

export default App;
