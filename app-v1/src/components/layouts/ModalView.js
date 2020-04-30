import React from "react";
import { SafeAreaView, View, Modal } from "react-native";
import IconBtn from "../IconBtn";
import { getTheme } from "../styles/colors";
const ModalView = ({
  children,
  setModalVisible,
  visible,
  headerRightIcon,
  ...restProps
}) => {
  const theme = getTheme();
  const headerRightIconSource = headerRightIcon;

  return (
    <Modal visible={visible} {...restProps}>
      <SafeAreaView style={{ flex: 1, backgroundColor: theme.backgroundColor }}>
        <View style={{ backgroundColor: theme.backgroundColor }}>
          <IconBtn
            source={headerRightIconSource}
            onPress={() => setModalVisible(!visible)}
          />
        </View>
        {children}
      </SafeAreaView>
    </Modal>
  );
};

ModalView.defaultProps = {
  // Modal
  animationType: "slide",
  transparent: false,
  visible: false,
  // other
  headerRightIcon: require("../../assets/icons/close.png"),
  setModalVisible: () => {}
};

export default ModalView;
