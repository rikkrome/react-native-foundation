import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTab from './BottomTab';
import HomeScreen from '../../view-modes/Home';

const RootStack = createStackNavigator();

const AppStack = () => (
  <RootStack.Navigator mode="modal">
    <RootStack.Screen
      name="Main"
      component={BottomTab}
      headerMode="none"
      options={{ headerShown: false }}
    />
    <RootStack.Screen name="MyModal" component={HomeScreen} />
  </RootStack.Navigator>
);

export default AppStack;
