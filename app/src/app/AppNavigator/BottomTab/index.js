import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../../view-modes/Home';

const Tab = createBottomTabNavigator();
const ProfileStack = createStackNavigator();
const ProfileTabs = createMaterialTopTabNavigator();
const HomeStack = createStackNavigator();

const homeStack = () => (
  <HomeStack.Navigator mode="modal">
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
    />
  </HomeStack.Navigator>
);

const profileTabs = () => (
  <ProfileTabs.Navigator>
    <ProfileTabs.Screen name="Home" component={HomeScreen} />
    <ProfileTabs.Screen name="Settings" component={HomeScreen} />
  </ProfileTabs.Navigator>
);

const profileStack = () => (
  <ProfileStack.Navigator mode="modal">
    <ProfileStack.Screen
      name="Home"
      component={profileTabs}
    />
  </ProfileStack.Navigator>
);


const BottomTab = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={homeStack} />
    <Tab.Screen name="Profile" component={profileStack} />
  </Tab.Navigator>
);


export default BottomTab;
