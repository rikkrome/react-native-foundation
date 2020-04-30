import React from "react";
import { TouchableOpacity, Image } from "react-native";

export default function IconBtn({
  source,
  onPress,
  style,
  ImageStyle,
  tintColor
}) {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <Image source={source} style={[ImageStyle, tintColor]} />
    </TouchableOpacity>
  );
}

IconBtn.defaultProps = {
  style: {
    marginHorizontal: 15,
    padding: 5
  },
  ImageStyle: { width: 24, height: 24 },
  tintColor: { tintColor: "gray" }
};
