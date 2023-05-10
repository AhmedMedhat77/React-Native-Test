import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "../components/Logo";
import { images } from "../constants";
import { GlobalStyles } from "../styles/Global";
import StepCounter from "../components/StepCounter";
import GrayText from "../components/GrayText";
import CheckBox from "../components/CheckBox";
import Footer from "../layout/Footer";
import FooterHelpers from "../components/FooterHelpers";

const About = () => {
  return (
    <SafeAreaView style={GlobalStyles.AndroidSafeArea}>
      <View style={GlobalStyles.contaier}>
        <View style={GlobalStyles.logo}>
          <Logo image={images.LOGO} resize="contain" />
        </View>
        <StepCounter start="2" end="7" />
        <GrayText text="Please Read Our Terms And Conditions And Agree To Continue" />
        <View style={styles.imageContainer}>
          <Image source={images.Terms} style={styles.img} resizeMode="cover" />
        </View>

        <View style={styles.checkContainer}>
          <CheckBox />
          <GrayText width="100%" text="I Agree To Your Terms And Conditions" />
        </View>
        <FooterHelpers />
        <Footer />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  img: {
    width: 220,
    height: 200,
  },
  checkContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default About;
