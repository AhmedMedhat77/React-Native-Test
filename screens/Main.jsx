import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import ViewContainer from "../layout/ViewContainer";

const Main = ({ navigation }) => {
  return (
    <ViewContainer>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Text>Screen 1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("About");
        }}
      >
        <Text>Screen 2</Text>
      </TouchableOpacity>
    </ViewContainer>
  );
};

const styles = StyleSheet.create({});

export default Main;
