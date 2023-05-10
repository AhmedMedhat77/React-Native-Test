import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { COLORS, SIZES } from "../constants";

const Title = (props) => {
  return (
    <View style={styles.titleContainer}>
      <Text
        style={{
          color: COLORS.primary,
          fontSize: SIZES.xxLarge,
          fontWeight: "700",
        }}
      >
        {props.text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 8,
  },
});

export default Title;
