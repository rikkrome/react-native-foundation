import React from "react";
import { View, ScrollView, Text } from "react-native";
import { getTheme } from "../../../components/styles/colors";
import { WIDTH, HEIGHT } from "../../../components/styles";
import { VictoryChart, VictoryGroup, VictoryArea } from "victory-native";

export default class AnalyticsViewOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = { yOffset: null, xOffset: null, selectedCard: null };
  }
  render() {
    const theme = getTheme();
    const ChartHeight = HEIGHT / 2;
    console.log("ChartHeight: ", ChartHeight);
    return (
      <View style={{ marginTop: 22 }}>
        <VictoryChart width={WIDTH} height={300}>
          <VictoryGroup
            style={{
              data: { strokeWidth: 3, fillOpacity: 0.4 }
            }}
          >
            <VictoryArea
              style={{
                data: { fill: "cyan", stroke: "cyan" }
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
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#05386b"
  },
  title: {
    height: 60,
    backgroundColor: "#edf5e1",
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  titleText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#05386b"
  },
  list: {
    alignItems: "center",
    paddingTop: 20
  }
};

// <Modal
//   animationType="slide"
//   transparent={false}
//   visible={this.state.modalVisible}
//   onRequestClose={() => {
//     Alert.alert("Modal has been closed.");
//   }}
// >
//   <View style={{ marginTop: 22 }}>
//     <VictoryChart width={WIDTH} height={300}>
//       <VictoryGroup
//         style={{
//           data: { strokeWidth: 3, fillOpacity: 0.4 }
//         }}
//       >
//         <VictoryArea
//           style={{
//             data: { fill: "cyan", stroke: "cyan" }
//           }}
//           data={[
//             { x: 1, y: 2 },
//             { x: 2, y: 3 },
//             { x: 3, y: 5 },
//             { x: 4, y: 4 },
//             { x: 5, y: 7 }
//           ]}
//         />
//       </VictoryGroup>
//     </VictoryChart>
//   </View>
// </Modal>
