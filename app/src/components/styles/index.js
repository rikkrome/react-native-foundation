import { Dimensions } from "react-native";
import * as colors from "./colors";
import * as fonts from "./fonts";
import * as styleSheet from "./styleSheet";
const { height, width } = Dimensions.get("window");
const WIDTH = width;
const HEIGHT = height;

export { styleSheet, colors, fonts, WIDTH, HEIGHT };
