import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  input: {
    width: "60%",
    height: 40,
    backgroundColor: "white",
    paddingHorizontal: 8,
    marginVertical: 8,
    borderWidth: 1,
    borderRadius: 5,
    color: "#000",
  },
  taskDescription: {
    borderBottomWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 5,
    marginHorizontal: 10,
    color: "#000",
  },
  headerButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  leftButton: {
    justifyContent: "flex-start",
    width: 30,
  },
  centerButton: {
    flex: 1,
    alignItems: "center",
  },
  errorMsg: { color: "#600" },
});
