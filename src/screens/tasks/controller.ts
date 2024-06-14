import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store/store";
import { tasksActions } from "../../services/tasks/slice";

export const useTask = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useAppDispatch();
  const { addTask } = tasksActions;

  const [modalVisible, setModalVisible] = useState(false);
  const [taskDescription, setTaskDescription] = useState("");
  const [errMsg, setErrMsg] = useState<string>();

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
    setErrMsg(undefined);
  };

  const handleAddTask = () => {
    if (taskDescription) {
      dispatch(addTask(taskDescription));
      setTaskDescription("");
      setModalVisible(false);
      setErrMsg(undefined);
    } else {
      setErrMsg("Enter the task!");
    }
  };

  return {
    tasks,
    taskDescription,
    modalVisible,
    errMsg,
    handleAddTask,
    showModal,
    hideModal,
    setTaskDescription,
  };
};
