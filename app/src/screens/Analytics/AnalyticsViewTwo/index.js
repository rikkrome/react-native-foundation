import React from "react";
import { View, Text } from "react-native";
import { getTheme } from "../../../components/styles/colors";

export default class AnalyticsViewTwo extends React.Component {
  render() {
    const theme = getTheme();
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: theme.backgroundColor,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text style={{ color: theme.textColor }}>AnalyticsViewTwo Screen</Text>
      </View>
    );
  }
}
