import React from "react";
import { View, ScrollView, Text } from "react-native";
import { getTheme } from "../../../../components/styles/colors";
import { WIDTH, HEIGHT } from "../../../../components/styles";
import { Container } from "../../../../components";
import { VictoryChart, VictoryGroup, VictoryArea } from "victory-native";

export default class StatsViewTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { yOffset: null, xOffset: null, selectedCard: null };
  }
  render() {
    const theme = getTheme();
    const ChartHeight = HEIGHT / 2;
    return (
      <Container>
        <View
          style={{ backgroundColor: theme.backgroundColor, marginTop: 10 }}
          pointerEvents="none"
        >
          <VictoryChart width={WIDTH} height={300}>
            <VictoryGroup
              style={{
                data: { strokeWidth: 1, fillOpacity: 0.0 }
              }}
            >
              <VictoryArea
                style={{
                  data: { stroke: "yellow" }
                }}
                data={[
                  { x: 1, y: 2 },
                  { x: 2, y: 3 },
                  { x: 3, y: 5 },
                  { x: 4, y: 4 },
                  { x: 5, y: 7 }
                ]}
              />
            </VictoryGroup>
          </VictoryChart>
        </View>

        {/* <View
          style={{ backgroundColor: "green", marginTop: 10, height: 400 }}
        /> */}
      </Container>
    );
  }
}
