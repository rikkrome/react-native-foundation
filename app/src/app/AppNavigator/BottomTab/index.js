import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../../view-modes/Home';
import HomeSVG from '../../../assets/svg/icons/ecommerceHouseSvg';
import StatisticsSvg from '../../../assets/svg/icons/statisticsSvg';
import styles from './styles';
import { colors } from '../../../design';

const Tab = createBottomTabNavigator();
const ProfileStack = createStackNavigator();
const ProfileTabs = createMaterialTopTabNavigator();
const HomeStack = createStackNavigator();

const homeStack = () => (
  <HomeStack.Navigator
    mode="modal"
    screenOptions={{
      headerStyle: {
        shadowColor: 'transparent',
      },
    }}
  >
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
    />
  </HomeStack.Navigator>
);

const profileTabs = () => (
  <ProfileTabs.Navigator lazy tabBarOptions={{ indicatorStyle: { backgroundColor: colors.black } }}>
    <ProfileTabs.Screen name="Home" component={HomeScreen} />
    <ProfileTabs.Screen name="Settings" component={HomeScreen} />
  </ProfileTabs.Navigator>
);

const profileStack = () => (
  <ProfileStack.Navigator
    mode="modal"
    screenOptions={{
      headerTitleAlign: 'center',
      headerStyle: {
        shadowColor: 'transparent',
      },
    }}
  >
    <ProfileStack.Screen
      name="Home"
      component={profileTabs}
    />
  </ProfileStack.Navigator>
);


const BottomTab = () => (
  <Tab.Navigator
    initialRouteName="Home"
    tabBarOptions={{
      activeTintColor: colors.black,
      inactiveTintColor: colors.grayLightest,
    }}
  >
    <Tab.Screen
      name="Home"
      component={homeStack}
      lazy
      options={{
        tabBarLabel: '',
        tabBarIcon: ({ color, size }) => (
          <View style={[{
            marginTop: 8,
            width: '100%',
            height: '100%',
          }]}
          >
            <HomeSVG
              name="home"
              color={color}
              style={styles.icon}
            />
          </View>
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={profileStack}
      options={{
        tabBarLabel: '',
        tabBarIcon: ({ color, size }) => (
          <View style={[{
            marginTop: 8,
            width: '70%',
            height: '70%',
          }]}
          >
            <StatisticsSvg
              name="home"
              color={color}
              style={styles.icon}
            />
          </View>
        ),
      }}
    />
  </Tab.Navigator>
);


export default BottomTab;
