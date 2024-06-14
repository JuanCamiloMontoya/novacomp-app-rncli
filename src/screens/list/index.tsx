import React from "react";
import { View, Text, FlatList, Image } from "react-native";
import { useUsers } from "./controller";
import { styles } from "./styles";

const ListScreen = () => {
  const { error, isLoading, users, getUserList } = useUsers();

  return (
    <View>
      {error && (
        <Text style={styles.colorBlack}>
          Error al obtener los usuarios: {error}
        </Text>
      )}
      <FlatList
        data={users}
        keyExtractor={item => item.id}
        onRefresh={getUserList}
        refreshing={isLoading}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image
              source={{
                uri: item.avatar,
              }}
              style={styles.image}
            />
            <Text style={styles.colorBlack}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default ListScreen;
