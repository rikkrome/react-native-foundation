import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../../view-modes/Home';

const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();

const homeStack = () => (
  <HomeStack.Navigator mode="modal">
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
    />
  </HomeStack.Navigator>
);

const BottomTab = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={homeStack} />
    <Tab.Screen name="Profile" component={homeStack} />
  </Tab.Navigator>
);

export default BottomTab;
