import React, { Component, useEffect, useContext } from "react";
import { View, Text } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { fonts, WIDTH } from "../../components/styles";
import { setTheme } from "../../components/styles/colors";
import { ProgressBar } from "../../components";
import { deepLink } from "../../../dev.config.js";
import { Store } from "../../store";
import { log } from "../../utils";

export default function LoadingScreen(props) {
  const { state, dispatch } = useContext(Store);
  log("LoadingScreen - state: ", state);
  const updateDictionaryAction = async () => {
    return dispatch.dictionary({
      type: "UPDATE_DICTIONARY",
      payload: { TEST: "UPDATE_DICTIONARY Loading - TEST" }
    });
  };

  _init = async () => {
    await _setTheme();
    if (__DEV__ && deepLink.enable) {
      props.navigation.navigate(deepLink.path);
    } else {
      setTimeout(async () => {
        const userToken = await _getUserToken();
        props.navigation.navigate(userToken ? "App" : "Auth");
      }, 1000);
    }
  };

  _setTheme = async () => {
    const theme = await AsyncStorage.getItem("theme");
    if (theme) {
      await setTheme(theme);
    } else {
      await AsyncStorage.setItem("theme", "lightTheme");
      await setTheme("lightTheme");
    }
  };

  _getUserToken = async () => {
    const userToken = await AsyncStorage.getItem("userToken");
    return userToken;
  };

  useEffect(() => {
    if (!state.dictionary) {
      updateDictionaryAction();
    }
  });

  useEffect(() => {
    if (state.dictionary) {
      _init();
    }
  });

  const { container, backgroundColor } = styles;
  return (
    <View style={[container, backgroundColor]}>
      <View style={{ padding: 10 }}>
        <Text style={{ ...fonts.Heading.h1, color: "#ffffff" }}>
          Loading...
        </Text>
      </View>
      <ProgressBar
        indeterminate={true}
        indeterminateAnimationDuration={3000}
        useNativeDriver={true}
        width={WIDTH / 1.5}
        color={"#AEC5D6"}
      />
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  backgroundColor: {
    backgroundColor: "#000000"
  }
};
