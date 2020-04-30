import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Dimensions
} from "react-native";
import { getTheme } from "../styles/colors";

const { height } = Dimensions.get("window");

export default class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      screenHeight: height
    };
  }

  onContentSizeChange = (contentWidth, contentHeight) => {
    this.setState({ screenHeight: contentHeight });
  };

  render() {
    const scrollEnabled = this.state.screenHeight > height;
    const theme = getTheme();
    return (
      <SafeAreaView
        style={[styles.container, { backgroundColor: theme.backgroundColor }]}
      >
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={styles.scrollview}
          scrollEnabled={scrollEnabled}
          onContentSizeChange={this.onContentSizeChange}
        >
          <View style={styles.content}>{this.props.children}</View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollview: {
    flexGrow: 1
  },
  content: {
    flexGrow: 1,
    justifyContent: "space-between",
    padding: 10
  }
});
