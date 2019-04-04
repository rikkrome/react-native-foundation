import React from "react";
import { View } from "react-native";
import { getTheme } from "../../../components/styles/colors";
import { ButtonCTA } from "../../../components";

export default class AnalyticsViewOne extends React.Component {
  render() {
    const theme = getTheme();
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
          <ButtonCTA
            title="Go to AnalyticsViewTwo"
            onPress={() => this.props.navigation.navigate("AnalyticsViewTwo")}
          />
        </View>
      </View>
    );
  }
}
