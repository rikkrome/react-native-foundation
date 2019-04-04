import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../../components/styles";
import { ButtonCTA, IconBtn } from "../../../components";

export default class ProfileViewOne extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <IconBtn
          source={require("../../../assets/icons/settings.png")}
          onPress={() => navigation.navigate("SettingsViewOne")}
        />
      )
    };
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
          <Text style={{ color: "#ffffff" }}>ProfileViewOne Screen</Text>
          <ButtonCTA
            title="Go to ProfileViewTwo"
            onPress={() => this.props.navigation.navigate("ProfileViewTwo")}
          />
          <ButtonCTA
            title="Go to Stats"
            onPress={() => this.props.navigation.navigate("AnalyticsViewOne")}
          />
          <ButtonCTA
            title="Go to Activity"
            onPress={() => this.props.navigation.navigate("AnalyticsViewTwo")}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24
  }
});
