import { ProfileStack } from "./ProfileStack";
import { SettingsStack } from "./SettingsStack";
import { createStackNavigator } from "react-navigation";
import { getTheme } from "../../../components/styles/colors";
/**
 * @description - main nav for the Profile tab
 * @ProfileTabs
 */
const ProfileTab = createStackNavigator(
  {
    ...ProfileStack,
    ...SettingsStack
  },
  {
    initialRouteName: "ProfileViewOne",
    defaultNavigationOptions: ({ navigation }) => {
      const theme = getTheme();
      return {
        title: "...",
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

export { ProfileTab };
