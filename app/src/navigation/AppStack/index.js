import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import { ProfileTab } from "./ProfileTab/index";
import { AnalyticsTab } from "./AnalyticsTab/index";
import { getTheme } from "../../components/styles/colors";
/**
 * @description - main app nav
 * @FullAppStack
 */
const AppStack = createBottomTabNavigator(
  {
    Profile: ProfileTab,
    Analytics: AnalyticsTab
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      const theme = getTheme();
      return {
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === "Profile") {
            iconName = require("../../assets/icons/user.png");
          } else if (routeName === "Analytics") {
            iconName = require("../../assets/icons/stats.png");
          }
          // You can return any component that you like here!
          return (
            <Image
              source={iconName}
              style={[{ width: 24, height: 24 }, { tintColor: tintColor }]}
            />
          );
        },
        tabBarOptions: {
          showLabel: false,
          activeTintColor: theme.activeTintColor,
          inactiveTintColor: theme.inactiveTintColor,
          style: {
            // Style object for the tab bar.
            backgroundColor: theme.backgroundColor
          }
        }
      };
    }
  }
);

export { AppStack };
