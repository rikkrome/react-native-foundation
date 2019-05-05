import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
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
  style,
  onPress
}) => {
  const theme = getTheme();
  const _onPress = () => {
    onPress(data);
  };
  const _renderInfo = () => {
    let info = "";
    data.info.forEach((infoData, i) => {
      if (i) {
        info = info + ", ";
      }
      info = info + `${infoData.label}: ${infoData.value}`;
    });
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          marginVertical: 15
        }}
      >
        {/* Left */}
        <View style={{ flex: 1, alignItems: "flex-start" }}>
          <Text style={{ color: theme.inactiveTextColor, fontSize: 10 }}>
            {info}
          </Text>
        </View>
        {/* Right  */}
        <View style={{ flex: 1 }}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "center"
            }}
          >
            <View
              style={{
                backgroundColor: "green",
                width: 5,
                height: 5,
                borderRadius: 100,
                marginRight: 5
              }}
            />
            <Text style={{ color: theme.inactiveTextColor, fontSize: 10 }}>
              TEMP {data.temp}
            </Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <TouchableOpacity
      onPress={_onPress}
      disabled={disabled}
      style={{
        backgroundColor: theme.backgroundColor,
        ...style
      }}
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
      {_renderInfo()}
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
  style: {},
  onPress: () => {}
};

export default StatBar;
