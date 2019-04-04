import React from "react";
import {
  View,
  AsyncStorage,
  FlatList,
  Switch,
  Text,
  StyleSheet,
  Alert
} from "react-native";
import { getTheme, setTheme } from "../../../components/styles/colors";
import { ButtonCTA } from "../../../components";

export default class SettingsViewOne extends React.Component {
  constructor(props) {
    super(props);
    this.theme = getTheme();
    this.state = {
      darkModeValue: false
    };
  }

  async componentDidMount() {
    await this._init();
  }

  _init = async () => {
    const update = {};
    const theme = await AsyncStorage.getItem("theme");
    if (theme === "darkTheme") {
      update.darkModeValue = true;
    } else {
      update.darkModeValue = false;
    }
    this.setState(update);
  };

  _logout = () => {
    Alert.alert(
      "Logout",
      "Are you sure?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel pressed"),
          style: "cancel"
        },
        {
          text: "OK",
          onPress: () => {
            AsyncStorage.removeItem("userToken");
            this.props.navigation.navigate("Auth");
          }
        }
      ],
      { cancelable: false }
    );
  };

  _keyExtractor = item => item.id;

  _renderItem = ({ item }) => {
    return <View style={{ flex: 1 }}>{item.view}</View>;
  };

  _tableRowSwitch = ({ text, value, onValueChange }) => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          paddingVertical: 10,
          borderBottomColor: "#bbb",
          borderBottomWidth: StyleSheet.hairlineWidth
        }}
      >
        <View style={{ flex: 1, alignItems: "flex-start" }}>
          <Text style={{ color: this.theme.textColor }}>{text}</Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "flex-end"
          }}
        >
          <Switch
            value={value}
            onValueChange={onValueChange}
            trackColor={{ true: this.theme.activeTintColor, false: "grey" }}
          />
        </View>
      </View>
    );
  };

  _darkMode = () => {
    const _onValueChange = value => {
      this.setState({ darkModeValue: value });
      if (value) {
        Alert.alert(
          "Switch to dark mode?",
          "App will reload",
          [
            {
              text: "Cancel",
              onPress: () => this.setState({ darkModeValue: !value }),
              style: "cancel"
            },
            {
              text: "OK",
              onPress: async () => {
                // save to DB
                await setTheme("darkTheme");
                await AsyncStorage.setItem("theme", "darkTheme");
                this.props.navigation.navigate("AuthLoading");
              }
            }
          ],
          { cancelable: false }
        );
      } else {
        Alert.alert(
          "Remove dark mode?",
          "App will reload",
          [
            {
              text: "Cancel",
              onPress: () => this.setState({ darkModeValue: !value }),
              style: "cancel"
            },
            {
              text: "OK",
              onPress: async () => {
                // remove from DB
                await setTheme("lightTheme");
                await AsyncStorage.setItem("theme", "lightTheme");
                this.props.navigation.navigate("AuthLoading");
              }
            }
          ],
          { cancelable: false }
        );
      }
    };
    return this._tableRowSwitch({
      text: "Dark Mode",
      value: this.state.darkModeValue,
      onValueChange: _onValueChange
    });
  };

  _getData = () => {
    const Theme = this._darkMode();
    const btnTo = (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ButtonCTA
          title="Go to SettingsViewTwo"
          onPress={() => this.props.navigation.navigate("SettingsViewTwo")}
        />
      </View>
    );
    const logout = (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ButtonCTA title="Logout" onPress={this._logout} />
      </View>
    );

    return [
      { id: "theme", view: Theme },
      { id: "btnTo", view: btnTo },
      { id: "logout", view: logout }
    ];
  };

  render() {
    const data = this._getData();
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: this.theme.backgroundColor,
          paddingHorizontal: 30
        }}
      >
        <FlatList
          data={data}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}
