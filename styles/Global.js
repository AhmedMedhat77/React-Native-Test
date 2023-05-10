import { Platform, StatusBar } from "react-native-web";

export const GlobalStyles = {
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  contaier: {
    flex: 1,
  },
  logo: {
    flexDirection: "row",
    justifyContent: "center",
  },
};
