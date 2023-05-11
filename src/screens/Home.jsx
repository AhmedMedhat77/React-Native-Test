import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { images, SIZES } from "../constants";
import Footer from "../layout/Footer";
import Logo from "../components/Logo";
import Title from "../components/Title";
import StepCounter from "../components/StepCounter";
import GrayText from "../components/GrayText";
import Button from "../components/Button";
import FooterHelpers from "../components/FooterHelpers";
import { GlobalStyles } from "../styles/Global";
const Home = () => {
  return (
    <SafeAreaView style={GlobalStyles.AndroidSafeArea}>
      <View style={GlobalStyles.contaier}>
        <View style={GlobalStyles.logo}>
          <Logo image={images.LOGO} resize="contain" />
        </View>
        <Title text="Create An Account" />
        <StepCounter start="1" end="7" />
        <GrayText text="Please Choose Reason For Creating The Account" />
        <View style={styles.actions}>
          <Button text="For School" width="50%" radius={SIZES.xSmall} />
          <Button text="For Buisness" width="50%" radius={SIZES.xSmall} />
          <Button
            primary
            text="Continue"
            width="63%"
            radius={SIZES.xLarge}
            padding={15}
          />
        </View>
        <FooterHelpers />
        <Footer />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  actions: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
});

export default Home;
