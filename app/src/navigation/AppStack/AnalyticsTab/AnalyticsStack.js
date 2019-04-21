import { createStackNavigator } from "react-navigation";
import { AnalyticsViewTwo } from "../../../screens/Analytics/index";
import { getTheme } from "../../../components/styles/colors";
import { StatsViewOne } from "../../../screens/Analytics/AnalyticsViewOne";

const AnalyticsViewOne = createStackNavigator(
  {
    StatsViewOne: {
      screen: StatsViewOne,
      path: "Analytics/:StatsViewOne",
      navigationOptions: {
        title: "Stats"
      }
    }
  },
  {
    initialRouteName: "StatsViewOne",
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
    screen: AnalyticsViewOne,
    path: "Analytics/:AnalyticsViewOne",
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
