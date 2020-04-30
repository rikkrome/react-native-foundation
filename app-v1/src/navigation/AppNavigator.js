import { createAppContainer, createSwitchNavigator } from "react-navigation";
import LoadingScreen from "../screens/LoadingScreen";
import { AuthStack } from "./AuthStack/index";
import { AppStack } from "./AppStack/index";
/***
 * @description - This allow us to switch between nav stacks.
 * @AuthLoading - loading screen will load the init data needed.
 * @App - main app stack
 * @Auth - login stack
 * */
const rootStack = createSwitchNavigator(
  {
    AuthLoading: LoadingScreen,
    Auth: AuthStack,
    App: AppStack
  },
  {
    initialRouteName: "AuthLoading"
  }
);

export default createAppContainer(rootStack);
