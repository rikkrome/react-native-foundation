import React from "react";
import { reducers } from "./reducers/";
import { log } from "../utils";

export const Store = React.createContext();

export function StoreProvider(props) {
  log("StoreProvider");
  const dictionary = reducers.dictionary();
  const value = {
    state: {
      ...dictionary.state
    },
    dispatch: {
      dictionary: dictionary.dispatch
    }
  };

  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
