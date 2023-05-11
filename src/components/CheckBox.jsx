import React from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { COLORS, icons } from "../constants";

const CheckBox = () => {
  const [state, setState] = React.useState(false);
  return (
    <TouchableOpacity
      onPress={() => setState((old) => !old)}
      style={styles.chckbox}
    >
      <Image
        source={state ? icons.Check : icons.EmptyCheckBox}
        resizeMode="contain"
        style={state ? { width: 20, height: 20 } : styles.inActive}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  chckbox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 5,
  },
  inActive: {
    width: 20,
    height: 20,
    borderColor: COLORS.primary,
    borderWidth: 3,
    backgroundColor: COLORS.white,
  },
});

export default CheckBox;
