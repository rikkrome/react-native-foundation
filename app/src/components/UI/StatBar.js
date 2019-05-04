import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Header } from "../Text";
import { getTheme } from "../styles/colors";
import ProgressBar from "./ProgressBar";

const StatBar = ({
  statName,
  statType,
  progress,
  totalStat,
  currentStat,
  disabled,
  data,
  onPress
}) => {
  const theme = getTheme();
  const _onPress = () => {
    onPress(data);
  };
  return (
    <TouchableOpacity
      onPress={_onPress}
      disabled={disabled}
      style={{ backgroundColor: theme.backgroundColor, marginBottom: 15 }}
    >
      <View style={{ flex: 1, flexDirection: "row", marginBottom: 10 }}>
        <View style={{ flex: 1, flexDirection: "row", alignItems: "flex-end" }}>
          <Header fontSize={"h2"} style={{ marginHorizontal: 3 }}>
            {statName}
          </Header>
          <Header
            fontSize={"h4"}
            color={"yellow"}
            style={{ marginHorizontal: 3, paddingBottom: 3 }}
          >
            {progress}%
          </Header>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "flex-end"
          }}
        >
          <Header fontSize={"h4"} style={{ marginHorizontal: 3 }}>
            {currentStat}/{totalStat} {statType}
          </Header>
        </View>
      </View>
      <View />
      <ProgressBar progress={progress} />
    </TouchableOpacity>
  );
};

StatBar.defaultProps = {
  disabled: false,
  statName: "",
  statType: "",
  progress: "",
  totalStat: "",
  currentStat: "",
  data: null,
  onPress: () => {}
};

export default StatBar;
