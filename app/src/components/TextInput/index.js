import React from "react";
import { StyleSheet, TextInput } from "react-native";
import { colors, fonts, WIDTH } from "../styles";

export default function TextInputComp({
  type,
  style,
  value,
  onChangeText = null,
  placeholder = "",
  textContentType = "none",
  secureTextEntry = false,
  autoComplete = "off"
}) {
  if (!onChangeText) {
    console.log("[TextInputComp] MISSING onChangeText");
    return null;
  }
  let _width = WIDTH / 1.5;
  let _height = 50;
  let _style = typeof style === "object" ? { ...style } : {};
  const theme = colors.getTheme();
  let btnTheme = theme.btnPrimary;
  if (theme[type]) {
    btnTheme = theme[type];
  }
  return (
    <TextInput
      style={{
        width: _width,
        height: _height,
        color: theme.textColor,
        borderBottomColor: theme.inactiveTintColor,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderWidth: 5,
        borderRadius: 5,
        marginVertical: 10,
        marginHorizontal: 10,
        ..._style
      }}
      maxLength={64}
      placeholder={placeholder}
      placeholderTextColor={theme.inactiveTintColor}
      clearTextOnFocus={true}
      onChangeText={onChangeText}
      value={value}
      textContentType={textContentType}
      secureTextEntry={secureTextEntry}
      autoComplete={autoComplete}
    />
  );
}
