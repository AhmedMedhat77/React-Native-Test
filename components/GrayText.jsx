import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS, SIZES } from "../constants";

const GrayText = (props) => {
  return (
    <View style={styles.textContainer}>
      <Text
        style={{
          color: COLORS.gray,
          fontSize: SIZES.medium,
          fontWeight: "bold",
          textAlign: "center",
          maxWidth: props.width ? props.width : "70%",
        }}
      >
        {props.text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
    alignItems: "center",
  },
});

export default GrayText;
