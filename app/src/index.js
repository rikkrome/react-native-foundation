import React, { Component } from "react";
import { AppNavigator } from "./navigation";
import { StoreProvider } from "./store";

export default class App extends Component {
  render() {
    return (
      <StoreProvider>
        <AppNavigator />
      </StoreProvider>
    );
  }
}
