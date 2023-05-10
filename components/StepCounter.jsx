import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { COLORS, SIZES } from "../constants";

const StepCounter = (props) => {
  return (
    <View style={styles.stepCounter}>
      <Text
        style={{
          color: COLORS.secondary,
          fontSize: SIZES.large,
          fontWeight: "bold",
          marginRight: 7,
        }}
      >
        Step
      </Text>
      <Text style={{ color: COLORS.secondary, fontSize: SIZES.medium }}>
        {props.start}
      </Text>
      <Text style={{ color: COLORS.secondary, fontSize: SIZES.medium }}>/</Text>
      <Text style={{ color: COLORS.secondary, fontSize: SIZES.medium }}>
        {props.end}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  stepCounter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default StepCounter;
