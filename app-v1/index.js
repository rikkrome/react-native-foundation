/**
 * @format
 */
import { AppRegistry, YellowBox } from "react-native";
import App from "./src";
import { name as appName } from "./app.json";

YellowBox.ignoreWarnings([
  "Deprecation warning: moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  "Task orphaned for request ",
  "Remote debugger is in a background tab which may cause apps to perform slowly"
]);
AppRegistry.registerComponent(appName, () => App);
