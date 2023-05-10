import React from "react";
import { View, StyleSheet, Image } from "react-native";

const Logo = (props) => {
  return (
    <View style={styles.imgContainer}>
      <Image
        style={styles.logo}
        source={props.image}
        resizeMode={props.resize}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imgContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 20,
  },
  logo: {
    width: 150,
    maxHeight: 50,
  },
});

export default Logo;
