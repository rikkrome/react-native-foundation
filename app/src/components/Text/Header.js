import React from "react";
import { View, Text } from "react-native";
import { Heading } from "../styles/fonts";
import { getTheme } from "../styles/colors";

const Header = ({ children, style, color, fontSize }) => {
  const theme = getTheme();
  const HeaderStyle = Heading[fontSize] ? Heading[fontSize] : Heading.h3;
  const textColor = color ? color : theme.textColor;
  return (
    <View style={{ ...style }}>
      <Text style={{ color: textColor, ...HeaderStyle }}>{children}</Text>
    </View>
  );
};

Header.defaultProps = {
  fontSize: "h3",
  style: {},
  color: null
};

export default Header;
