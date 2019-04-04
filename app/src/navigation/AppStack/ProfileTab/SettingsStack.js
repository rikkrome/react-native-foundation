import { SettingsViewOne, SettingsViewTwo } from "../../../screens/Settings";

/**
 * @description - main nav for the Settings stack
 * @SettingsStack
 */
const SettingsStack = {
  SettingsViewOne: {
    screen: SettingsViewOne,
    navigationOptions: {
      title: "Settings"
    }
  },
  SettingsViewTwo: {
    screen: SettingsViewTwo,
    navigationOptions: {
      title: "SettingsViewTwo"
    }
  }
};

export { SettingsStack };
