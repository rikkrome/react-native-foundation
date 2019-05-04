import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { colors, fonts, WIDTH } from "../styles";

export default function ButtonCTA({ width, type, style, title, onPress }) {
  let _width = width;
  let _height = 50;
  let _style = typeof style === "object" ? { ...style } : {};
  const theme = colors.getTheme();
  let btnTheme = theme.btnPrimary;
  if (theme[type]) {
    btnTheme = theme[type];
  }
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: _width,
        height: _height,
        backgroundColor: btnTheme.backgroundColor,
        borderRadius: 5,
        ..._style
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text style={{ ...fonts.Heading.h4, color: btnTheme.textColor }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

ButtonCTA.defaultProps = {
  width: WIDTH / 1.5,
  title: "-",
  type: "btnPrimary"
};
