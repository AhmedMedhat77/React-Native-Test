import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { COLORS, SIZES } from "../constants";
import Button from "./Button";

const FooterHelpers = () => {
  return (
    <View style={styles.helper}>
      <View style={styles.helperContainer}>
        <Button
          width="20%"
          fontSize={SIZES.medium}
          padding={10}
          radius={SIZES.small}
          text="English"
          marign={0}
        />

        <View style={styles.helperContainerText}>
          <Text
            style={{
              color: COLORS.primary,
              fontWeight: "bold",
              fontSize: SIZES.small,
              marginRight: 10,
            }}
          >
            Help
          </Text>
          <Text
            style={{
              color: COLORS.primary,
              fontWeight: "bold",
              fontSize: SIZES.small,
              marginRight: 10,
            }}
          >
            Privacy
          </Text>
          <Text
            style={{
              color: COLORS.primary,
              fontWeight: "bold",
              fontSize: SIZES.small,
            }}
          >
            Temrs
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  helper: {
    flex: 9,
    justifyContent: "flex-end",
  },
  helperContainer: {
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  helperContainerText: {
    flexDirection: "row",
  },
});

export default FooterHelpers;
