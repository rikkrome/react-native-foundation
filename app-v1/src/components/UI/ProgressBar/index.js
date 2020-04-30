import React, { Component } from "react";
import { View } from "react-native";
import * as DH from "./dataHelpers";
import { WIDTH } from "../../styles";
import { getTheme } from "../../styles/colors";

export default class ProgressBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: DH.data
    };
  }

  _keyExtractor = item => item.id;

  _renderItem = ({ item }) => {
    const theme = getTheme();
    const progress = this.props.progress / 2;
    backgroundColor = progress > item.id ? item.color : theme.secondary;
    return (
      <View
        key={item.id}
        style={{
          flex: 1,
          width: WIDTH / 50 - 2.5,
          height: 20,
          marginRight: 2,
          borderRadius: 1.2,
          backgroundColor: backgroundColor
        }}
      />
    );
  };

  _renderBar = () => {
    const items = [];
    this.state.data.map(item => {
      items.push(this._renderItem({ item }));
    });
    return items;
  };

  render() {
    return (
      <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
        {this._renderBar()}
      </View>
    );
  }
}
