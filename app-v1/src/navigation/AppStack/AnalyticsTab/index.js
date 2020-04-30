import {
  createStackNavigator,
  createMaterialTopTabNavigator
} from "react-navigation";
import { AnalyticsStack } from "./AnalyticsStack";
import { colors } from "../../../components/styles";
import { getTheme } from "../../../components/styles/colors";

/**
 * @description - main nav for the Analytics tab
 * @AnalyticsTab
 */
const TopTabNav = createMaterialTopTabNavigator(
  {
    ...AnalyticsStack
  },
  {
    initialRouteName: "AnalyticsViewOne",
    defaultNavigationOptions: ({ navigation }) => {
      const theme = getTheme();
      return {
        tabBarOptions: {
          labelStyle: {
            // Style object for the tab label.
            fontSize: 12,
            color: theme.textColor
          },
          tabStyle: {
            // Style object for the tab.
            flex: 1
          },
          indicatorStyle: {
            // line at the bottom of the tab
            backgroundColor: theme.activeTintColor
          },
          style: {
            // Style object for the tab bar.
            backgroundColor: theme.backgroundColor
          }
        }
      };
    }
  }
);

const AnalyticsTab = createStackNavigator(
  {
    Analytics: TopTabNav
  },
  {
    initialRouteName: "Analytics",
    defaultNavigationOptions: ({ navigation }) => {
      const theme = getTheme();
      return {
        title: "Analytics",
        headerStyle: {
          backgroundColor: theme.backgroundColor,
          borderBottomWidth: 0
        },
        headerTintColor: theme.activeTintColor,
        headerTitleStyle: {
          color: theme.textColor
        }
      };
    }
  }
);

export { AnalyticsTab };
