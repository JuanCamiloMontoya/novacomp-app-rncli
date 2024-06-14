import React from "react";
import { styles } from "./styles";
import { useHome } from "./controller";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../_components/button";

const HomeScreen = () => {
  const { onPressList, onPressTasks } = useHome();
  return (
    <SafeAreaView style={styles.container}>
      <Button onPress={onPressTasks} title="Tasks" />
      <Button onPress={onPressList} title="List" />
    </SafeAreaView>
  );
};

export default HomeScreen;
