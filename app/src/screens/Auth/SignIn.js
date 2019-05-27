import React, { useState, useEffect, useContext } from "react";
import { View } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { colors } from "../../components/styles";
import { ButtonCTA, TextInput } from "../../components";
import { Store } from "../../store";
import { log } from "../../utils";

export default function SignIn(props) {
  const { state, dispatch } = useContext(Store);
  log("SignIn state: ", state);
  const [emailText, setEmailText] = useState("");
  const [passwordText, setPasswordText] = useState("");
  const [dictionaryUpdated, setDictionaryUpdated] = useState(false);

  const updateDictionaryAction = async () => {
    return dispatch.dictionary({
      type: "UPDATE_DICTIONARY",
      payload: { TEST: "UPDATE_DICTIONARY SignIn - TEST" }
    });
  };

  useEffect(() => {
    if (!dictionaryUpdated) {
      updateDictionaryAction();
      setDictionaryUpdated(true);
    }
  });

  _login = async () => {
    await AsyncStorage.setItem("userToken", "123456789");
    props.navigation.navigate("App");
  };

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
          onChangeText={text => setEmailText(text)}
          value={emailText}
          placeholder={"Email"}
          textContentType={"emailAddress"}
          autoComplete={"email"}
        />
        <TextInput
          onChangeText={text => setPasswordText(text)}
          value={passwordText}
          placeholder={"Password"}
          textContentType={"password"}
          autoComplete={"password"}
          secureTextEntry={true}
          onSubmitEditing={_login}
        />
        <ButtonCTA
          title="Sign in"
          onPress={_login}
          style={{
            marginVertical: 10,
            marginHorizontal: 10
          }}
        />
        <ButtonCTA
          title="Sign up"
          onPress={() => props.navigation.navigate("SignUp")}
          style={{
            marginVertical: 10,
            marginHorizontal: 10
          }}
        />
      </View>
    </View>
  );
}
