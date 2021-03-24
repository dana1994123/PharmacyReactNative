import { StyleSheet } from "react-native";
import R from "../../../../res/R";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    color: R.colors.white,
  },
  title: {},

  logo: {
    flex: 1,
    height: 120,
    width: 120,
    alignSelf: "center",
    margin: 30,
  },
  input: {
    width: 330,
    height: 48,
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: "white",
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 16,
  },
  button: {
    backgroundColor: R.colors.primary,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    height: 48,
    width: "50%",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  buttonTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  footerView: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
  footerText: {
    fontSize: 16,
    color: "black",
  },
  footerLink: {
    color: R.colors.primary,
    fontWeight: "bold",
    fontSize: 16,
  },
  subTitle: {
    marginTop: 10,
    marginBottom: 0,
    marginLeft: 15,
    marginRight: 30,
    paddingLeft: 16,
  },
  error: {
    fontSize: 10,
    color: R.colors.red,
    fontWeight: "bold",
    marginStart: "10%",
  },
});
