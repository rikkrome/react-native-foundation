import React from "react";
import { View, FlatList } from "react-native";
import { ModalView } from "../../../../components";
import { StatBar } from "../../../../components/UI";
import { Header } from "../../../../components/Text";
import { colors, styleSheet } from "../../../../components/styles";
import StatsViewTwo from "../StatsViewTwo";
export default class AnalyticsViewOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: "0",
          data: {
            statName: "CPU",
            statType: "CORES",
            progress: 60,
            totalStat: 20,
            currentStat: 12,
            temp: "100 C",
            info: [
              {
                label: "Processes",
                value: "2K"
              },
              {
                label: "THREADS",
                value: "5.2K"
              }
            ],
            chartData: [
              { x: 1, y: 4 },
              { x: 2, y: 3 },
              { x: 3, y: 1 },
              { x: 4, y: 6 },
              { x: 5, y: 6 },
              { x: 6, y: 8 },
              { x: 7, y: 6 },
              { x: 8, y: 8 },
              { x: 9, y: 7 },
              { x: 10, y: 9 },
              { x: 11, y: 10 }
            ]
          }
        },
        {
          id: "1",
          data: {
            statType: "GB",
            statName: "RAM",
            progress: 15,
            totalStat: 32,
            currentStat: 4.8,
            temp: "50 C",
            info: [
              {
                label: "CACHE",
                value: "2.5/8GB"
              }
            ],
            chartData: [
              { x: 1, y: 10 },
              { x: 2, y: 13 },
              { x: 3, y: 9 },
              { x: 4, y: 9 },
              { x: 5, y: 6 },
              { x: 6, y: 8 },
              { x: 7, y: 2 },
              { x: 8, y: 1 },
              { x: 9, y: 2 },
              { x: 10, y: 3 },
              { x: 11, y: 1 }
            ]
          }
        },
        {
          id: "2",
          data: {
            statType: "TB",
            statName: "STORAGE",
            progress: 99,
            totalStat: 99,
            currentStat: 100,
            temp: "100 C",
            info: [
              {
                label: "IN",
                value: "100MB/s"
              },
              {
                label: "OUT",
                value: "100MB/s"
              }
            ],
            chartData: [
              { x: 1, y: 99 },
              { x: 2, y: 90 },
              { x: 3, y: 100 },
              { x: 4, y: 99.9 },
              { x: 5, y: 94.2 },
              { x: 6, y: 92.1 },
              { x: 7, y: 88.3 },
              { x: 8, y: 95.1 },
              { x: 9, y: 95.3 },
              { x: 10, y: 97.4 },
              { x: 11, y: 99 }
            ]
          }
        }
      ],
      modalVisible: false,
      selected: null
    };
  }

  _setModalVisible = visible => {
    this.setState({ modalVisible: visible });
  };

  _keyExtractor = item => item.id;

  _onPress = data => {
    this.setState({ selected: data }, () => {
      this._setModalVisible(true);
    });
  };

  _renderItem = ({ item }) => {
    return (
      <StatBar
        {...item.data}
        data={item.data}
        onPress={this._onPress}
        style={{ paddingVertical: 30 }}
      />
    );
  };

  _Modal = () => {
    return (
      <ModalView
        visible={this.state.modalVisible}
        setModalVisible={this._setModalVisible}
      >
        <StatsViewTwo data={this.state.selected} />
      </ModalView>
    );
  };

  render() {
    const theme = colors.getTheme();
    return (
      <View style={{ flex: 1, backgroundColor: theme.backgroundColor }}>
        {this._Modal()}
        <View
          style={[
            styleSheet.wrapper,
            { flex: 1, backgroundColor: theme.backgroundColor }
          ]}
        >
          <Header fontSize={"h1"} style={{ marginBottom: 10 }}>
            ALPHA ONE
          </Header>
          <Header
            fontSize={"h5"}
            style={{ marginBottom: 20 }}
            color={theme.inactiveTintColor}
          >
            #FS445-F44
          </Header>
          <FlatList
            data={this.state.data}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
            contentContainer={{ flexGrow: 1, backgroundColor: "red" }}
          />
        </View>
      </View>
    );
  }
}
