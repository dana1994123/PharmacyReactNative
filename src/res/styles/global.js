import { StyleSheet } from "react-native";
import R from "../R";

export const layout = StyleSheet.create({
  fullScreen: {
    flex: 1,
  },
  centeredFullScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  body: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: R.colors.white,
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    width: 400,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",

    backgroundColor: R.colors.white,
  },
});

export const form = StyleSheet.create({
  textInput: {
    color: "#000",
    height: 50,
    fontSize: 20,
    backgroundColor: "#EEEEEE",
    alignSelf: "stretch",
    borderRadius: 5,
    margin: 5,
  },
});

export const button = StyleSheet.create({
  appButtonContainer: {
    width: 200,
    elevation: 8,
    //backgroundColor: R.colors.primary,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 20,
  },
  appButtonText: {
    fontSize: 18,
    color: R.colors.white,
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});
