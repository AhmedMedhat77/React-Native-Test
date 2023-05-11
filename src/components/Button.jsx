import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { COLORS } from "../constants";
const Button = (props) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: props.primary ? COLORS.primary : COLORS.tertiary,
        borderRadius: props.radius,
        marginBottom: props.margin ? props.margin : 10,
        paddingVertical: props.padding ?? 10,

        width: props.width ? props.width : "100%",
      }}
      onPress={props.onPress}
    >
      <Text
        style={{
          color: props.primary ? COLORS.white : COLORS.primary,
          fontSize: props.fontSize,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default Button;
