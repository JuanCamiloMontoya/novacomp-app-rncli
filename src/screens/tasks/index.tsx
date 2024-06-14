import React from "react";
import { View, FlatList, Text, Modal, TextInput } from "react-native";
import { useTask } from "./controller";
import { styles } from "./styles";
import { Button } from "../_components/button";

const TasksScreen = () => {
  const {
    modalVisible,
    tasks,
    taskDescription,
    errMsg,
    handleAddTask,
    hideModal,
    showModal,
    setTaskDescription,
  } = useTask();

  return (
    <View>
      <View style={styles.headerButtons}>
        <View style={styles.centerButton}>
          <Button title="New Task" onPress={showModal} />
        </View>
      </View>
      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Text style={styles.taskDescription}>{item.description}</Text>
        )}
      />
      <Modal visible={modalVisible} transparent={true} testID="newTaskModal">
        <View style={styles.modalView}>
          <TextInput
            style={styles.input}
            placeholder="New Task Name"
            value={taskDescription}
            onChangeText={setTaskDescription}
            testID="taskInput"
          />
          {errMsg && (
            <View testID="errMsg">
              <Text style={styles.errorMsg}>* {errMsg}</Text>
            </View>
          )}
          <Button title="Add" onPress={handleAddTask} />
          <Button title="Cancel" onPress={hideModal} />
        </View>
      </Modal>
    </View>
  );
};

export default TasksScreen;
