import { createStackNavigator } from "react-navigation";
import { AnalyticsViewTwo } from "../../../screens/Analytics/index";
import { getTheme } from "../../../components/styles/colors";
import {
  StatsViewOne,
  StatsViewTwo
} from "../../../screens/Analytics/AnalyticsViewOne";

const AnalyticsViewOne = createStackNavigator(
  {
    StatsViewOne: {
      screen: StatsViewOne,
      path: "Analytics/:StatsViewOne",
      navigationOptions: {
        title: "Stats"
      }
    },
    StatsViewTwo: {
      screen: StatsViewTwo,
      path: "Analytics/:StatsViewTwo",
      navigationOptions: {
        title: "Stats"
      }
    }
  },
  {
    initialRouteName: "StatsViewOne",
    headerMode: "none",
    mode: "modal",
    defaultNavigationOptions: ({ navigation }) => {
      const theme = getTheme();
      return {
        title: "",
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

/**
 * @description - main nav for the Analytics stack
 * @AnalyticsStack
 */
const AnalyticsStack = {
  AnalyticsViewOne: {
    screen: StatsViewOne,
    path: "Analytics/:StatsViewOne",
    navigationOptions: {
      title: "Stats"
    }
  },
  AnalyticsViewTwo: {
    screen: AnalyticsViewTwo,
    path: "Analytics/:AnalyticsViewTwo",
    navigationOptions: {
      title: "Activity"
    }
  }
};

export { AnalyticsStack };
