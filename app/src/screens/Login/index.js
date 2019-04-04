import React from "react";
import { View, AsyncStorage } from "react-native";
import { colors } from "../../components/styles";
import { ButtonCTA } from "../../components";

export default class Login extends React.Component {
  static navigationOptions = {
    headerTransparent: true
  };

  _login = async () => {
    await AsyncStorage.setItem("userToken", "123456789");
    this.props.navigation.navigate("App");
  };

  render() {
    const theme = colors.getTheme();
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            backgroundColor: theme.backgroundColor,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <ButtonCTA title="Login" onPress={this._login} />
        </View>
      </View>
    );
  }
}
