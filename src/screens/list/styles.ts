import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    borderWidth: 1,
    marginHorizontal: 8,
    paddingVertical: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 16,
    backgroundColor: "#CCC",
    marginRight: 10,
  },
  headerButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
  },
  leftButton: {
    marginLeft: 8,
    width: 30,
  },
  colorBlack: {
    color: "#000",
  },
});
