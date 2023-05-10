import React from "react";
import { View, StyleSheet } from "react-native";
import { GlobalStyles } from "../styles/Global";

const ViewContainer = ({ children, backgroundColor }) => {
  return (
    <View style={(GlobalStyles.contaier, { backgroundColor: backgroundColor })}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({});

export default ViewContainer;
