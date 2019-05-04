import React from "react";
import { View } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { colors } from "../../components/styles";
import { ButtonCTA, TextInput } from "../../components";

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailText: "",
      passwordText: "",
      passwordConfirmText: ""
    };
  }

  static navigationOptions = {
    headerTransparent: true
  };

  _onPressSignUp = async () => {
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
          />
          <TextInput
            onChangeText={text => this.setState({ passwordConfirmText: text })}
            value={this.state.passwordConfirmText}
            placeholder={"Confirm"}
            textContentType={"password"}
            autoComplete={"password"}
            secureTextEntry={true}
          />
          <ButtonCTA
            title="Sign up"
            onPress={this._onPressSignUp}
            style={{
              marginVertical: 10,
              marginHorizontal: 10
            }}
          />
        </View>
      </View>
    );
  }
}
