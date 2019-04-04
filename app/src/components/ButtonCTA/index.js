import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { colors, fonts, WIDTH } from "../styles";

export default function ButtonCTA({ type, style, title, onPress }) {
  let _width = WIDTH / 1.5;
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
        marginVertical: 10,
        marginHorizontal: 10,
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
