import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from "../services/tasks/slice";
import { useDispatch } from "react-redux";
import { usersReducer } from "../services/users/slice";

const rootReducer = combineReducers({
  tasks: tasksReducer,
  users: usersReducer,
});

export function setupStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}

export const store = setupStore();
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
export const useAppDispatch: () => AppDispatch = useDispatch;
