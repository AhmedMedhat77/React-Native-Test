import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { COLORS, SIZES } from "../constants";
const Footer = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.footerContent}>
        <Text
          style={{
            ...styles.copyRight,
            color: COLORS.primary,
            fontSize: SIZES.medium,
          }}
        >
          Copy &copy;{" "}
        </Text>
        <Text style={{ color: COLORS.primary, fontSize: SIZES.small }}>
          Brand Inc. 2023- All Right Reserved
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom:4
  },
  footerContent: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  copyRight: {
    fontWeight: "bold",
  },
});

export default Footer;
