import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../models";

export const useHome = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const onPressTasks = () => {
    navigation.navigate("Tasks");
  };

  const onPressList = () => {
    navigation.navigate("List");
  };

  return { onPressTasks, onPressList };
};
