import { Pressable, Text } from "react-native";
import { styles } from "./styles";
import { IButtonProps } from "./models";

export const Button = (props: IButtonProps) => {
  const { onPress, title } = props;
  return (
    <Pressable style={styles.button} onPress={onPress} testID={title}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};
