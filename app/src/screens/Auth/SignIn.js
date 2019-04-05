import React from "react";
import { View } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { colors, WIDTH } from "../../components/styles";
import { ButtonCTA, TextInput } from "../../components";

export default class SignIn extends React.Component {
  static navigationOptions = {
    headerTransparent: true
  };
  constructor(props) {
    super(props);
    this.state = {
      emailText: "",
      passwordText: ""
    };
  }

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
          <TextInput
            onChangeText={text => this.setState({ emailText: text })}
            value={this.state.emailText}
            placeholder={"Email"}
            textContentType={"emailAddress"}
            autoComplete={"email"}
          />
          <TextInput
            onChangeText={text => this.setState({ passwordText: text })}
            value={this.state.passwordText}
            placeholder={"Password"}
            textContentType={"password"}
            autoComplete={"password"}
            secureTextEntry={true}
            onSubmitEditing={this._login}
          />
          <ButtonCTA title="Sign in" onPress={this._login} />
          <ButtonCTA
            title="Sign up"
            onPress={() => this.props.navigation.navigate("SignUp")}
          />
        </View>
      </View>
    );
  }
}
