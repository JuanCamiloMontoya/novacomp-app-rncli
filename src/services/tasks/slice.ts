import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<string>) {
      const newTask = {
        id: Math.random().toString(),
        description: action.payload,
      };
      state.tasks.push(newTask);
    },
  },
});

const tasksActions = tasksSlice.actions;
const tasksReducer = tasksSlice.reducer;

export { tasksActions, tasksReducer };
