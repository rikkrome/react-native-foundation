import React, { Component } from "react";
import { View, Text, AsyncStorage } from "react-native";
import { fonts, WIDTH } from "../../components/styles";
import { setTheme } from "../../components/styles/colors";

import { ProgressBar } from "../../components";

export default class LoadingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Loading: true
    };
  }

  componentDidMount() {
    this._init();
  }

  _init = () => {
    setTimeout(async () => {
      const userToken = await this._getUserToken();
      await this._setTheme();
      this.props.navigation.navigate(userToken ? "App" : "Auth");
    }, 1000);
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
    if (__DEV__) {
      return false;
    }
    return userToken;
  };

  render() {
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
