import React from "react";
import { TouchableOpacity, Image } from "react-native";

export default function IconBtn({ source, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ marginHorizontal: 15, padding: 5 }}
    >
      <Image
        source={source}
        style={[{ width: 24, height: 24 }, { tintColor: "gray" }]}
      />
    </TouchableOpacity>
  );
}
