import { createStackNavigator } from "react-navigation";
import { SignIn, SignUp } from "../../screens/Auth";

const AuthStack = createStackNavigator({ SignIn: SignIn, SignUp: SignUp });

export { AuthStack };
