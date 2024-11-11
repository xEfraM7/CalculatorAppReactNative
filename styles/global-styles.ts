import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  calculatorContainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 20,
  },

  mainResult: {
    color: Colors.textPrimary,
    fontSize: 70,
    textAlign: "right",
    fontWeight: "400",
  },

  secondaryResult: {
    color: Colors.textSecondary,
    fontSize: 50,
    textAlign: "right",
    fontWeight: "300",
  },

  row: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 18,
    paddingHorizontal: 10,
  },

  button: {
    height: 80,
    width: 80,
    backgroundColor: Colors.darkGray,
    borderRadius: 100,
    justifyContent: "center",
    marginHorizontal: 10,
  },

  buttonText: {
    color: Colors.textPrimary,
    textAlign:"center",
    fontSize: 30,
    fontWeight: "300",
    padding: 10,
    fontFamily: "SpaceMono",
  },
});
