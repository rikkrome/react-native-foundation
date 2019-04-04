import { ProfileViewOne, ProfileViewTwo } from "../../../screens/Profile";

/**
 * @description - main nav for the Profile stack
 * @ProfileStack
 */
const ProfileStack = {
  ProfileViewOne: {
    screen: ProfileViewOne,
    navigationOptions: {
      title: "Profile"
    }
  },
  ProfileViewTwo: {
    screen: ProfileViewTwo,
    navigationOptions: {
      title: "ProfileViewTwo"
    }
  }
};

export { ProfileStack };
