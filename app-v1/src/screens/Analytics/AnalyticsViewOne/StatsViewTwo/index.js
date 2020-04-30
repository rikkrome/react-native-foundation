import React from "react";
import { View, ScrollView, Text } from "react-native";
import { getTheme } from "../../../../components/styles/colors";
import { WIDTH, HEIGHT } from "../../../../components/styles";
import { Container, ButtonCTA, IconBtn } from "../../../../components";
import { StatBar } from "../../../../components/UI";

import {
  VictoryChart,
  VictoryGroup,
  VictoryArea,
  VictoryTheme
} from "victory-native";

export default class StatsViewTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { yOffset: null, xOffset: null, selectedCard: null };
  }

  _renderStatBar = ({ theme }) => {
    return (
      <StatBar {...this.props.data} data={this.props.data} disabled={true} />
    );
  };

  _renderLineSeparator = ({ theme }) => {
    return (
      <View
        style={{
          height: 1,
          borderRadius: 2,
          backgroundColor: theme.secondary,
          marginVertical: 10
        }}
      />
    );
  };

  _renderVictoryChartInfoButtons = ({ theme }) => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          marginVertical: 15
        }}
      >
        {/* left */}
        <View style={{ flex: 1 }}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center"
            }}
          >
            <Text style={{ color: theme.inactiveTextColor, fontSize: 10 }}>
              SOURCE{" "}
            </Text>
            <IconBtn
              source={require("../../../../assets/icons/ellipsis-horizontal.png")}
              onPress={() => {}}
              tintColor={{ tintColor: theme.textColor }}
              ImageStyle={{
                width: 15,
                height: 15
              }}
              style={{
                width: 15,
                height: 15,
                backgroundColor: theme.inactiveTintColor,
                borderRadius: 100
              }}
            />
          </View>
        </View>
        {/* right */}
        <View style={{ flex: 1 }}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "center"
            }}
          >
            <Text style={{ color: theme.inactiveTextColor, fontSize: 10 }}>
              ADVANCED{" "}
            </Text>
            <IconBtn
              source={require("../../../../assets/icons/ellipsis-horizontal.png")}
              onPress={() => {}}
              tintColor={{ tintColor: theme.textColor }}
              ImageStyle={{
                width: 15,
                height: 15
              }}
              style={{
                width: 15,
                height: 15,
                backgroundColor: theme.inactiveTintColor,
                borderRadius: 100
              }}
            />
          </View>
        </View>
      </View>
    );
  };

  _renderVictoryChart = ({ theme }) => {
    const ChartHeight = HEIGHT / 2;
    return (
      <View style={{ flex: 1, alignItems: "center" }}>
        <VictoryChart
          theme={theme.VictoryTheme}
          width={WIDTH - 10}
          height={ChartHeight}
        >
          <VictoryGroup
            style={{
              data: { strokeWidth: 1, fillOpacity: 0.0 }
            }}
            animate={{
              duration: 2000,
              onLoad: { duration: 1000 }
            }}
          >
            <VictoryArea
              style={{
                data: { stroke: "yellow" }
              }}
              data={this.props.data.chartData}
            />
          </VictoryGroup>
        </VictoryChart>
      </View>
    );
  };

  _renderChartButtons = ({ theme }) => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          marginVertical: 15
        }}
      >
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={{ color: theme.textColor, fontSize: 10 }}>REALTIME</Text>
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={{ color: theme.inactiveTextColor, fontSize: 10 }}>
            1D
          </Text>
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={{ color: theme.inactiveTextColor, fontSize: 10 }}>
            3D
          </Text>
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={{ color: theme.inactiveTextColor, fontSize: 10 }}>
            1W
          </Text>
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={{ color: theme.inactiveTextColor, fontSize: 10 }}>
            1M
          </Text>
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={{ color: theme.inactiveTextColor, fontSize: 10 }}>
            3M
          </Text>
        </View>
      </View>
    );
  };

  _renderButtons = () => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <ButtonCTA
          width={WIDTH / 2.2}
          type={"btnSecondary"}
          title="SETTINGS"
          onPress={() => {}}
          style={{
            marginVertical: 10,
            marginRight: 10
          }}
        />
        <ButtonCTA
          width={WIDTH / 2.2}
          type={"btnSecondary"}
          title="CONSOLE"
          onPress={() => {}}
          style={{
            marginVertical: 10
          }}
        />
      </View>
    );
  };

  render() {
    const theme = getTheme();
    return (
      <Container>
        <View
          style={{
            backgroundColor: theme.backgroundColor,
            marginTop: 10
          }}
        >
          {this._renderStatBar({ theme })}
          {this._renderLineSeparator({ theme })}
          {this._renderVictoryChartInfoButtons({ theme })}
          {this._renderVictoryChart({ theme })}
          {this._renderChartButtons({ theme })}
          {this._renderButtons()}
        </View>
      </Container>
    );
  }
}
