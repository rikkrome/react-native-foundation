import React from "react";
import { View, Text, FlatList, Modal, SafeAreaView } from "react-native";
import { ButtonCTA, IconBtn, ModalView } from "../../../../components";
import { getTheme } from "../../../../components/styles/colors";
import StatsViewTwo from "../StatsViewTwo";
export default class AnalyticsViewOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{ id: "0" }],
      modalVisible: false
    };
  }

  _setModalVisible = visible => {
    this.setState({ modalVisible: visible });
  };

  _keyExtractor = item => item.id;

  _renderItem = ({ item }) => (
    <View style={{ height: 300, backgroundColor: "red" }}>
      <Text style={{ color: "#ffffff" }}>TESTING</Text>
      <ButtonCTA
        title="Go to StatsViewTwo"
        onPress={() => this._setModalVisible(true)}
      />
    </View>
  );

  _Modal = () => {
    return (
      <ModalView
        visible={this.state.modalVisible}
        setModalVisible={this._setModalVisible}
      >
        <StatsViewTwo />
      </ModalView>
    );
  };

  render() {
    return (
      <View>
        {this._Modal()}
        <FlatList
          data={this.state.data}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}
