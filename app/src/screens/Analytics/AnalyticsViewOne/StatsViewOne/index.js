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
            currentStat: 12
          }
        },
        {
          id: "1",
          data: {
            statType: "GB",
            statName: "RAM",
            progress: 99,
            totalStat: 7,
            currentStat: 32
          }
        },
        {
          id: "2",
          data: {
            statType: "TB",
            statName: "STORAGE",
            progress: 99,
            totalStat: 99,
            currentStat: 100
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
    return <StatBar {...item.data} data={item.data} onPress={this._onPress} />;
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
