import { TasksState } from "./models";

export const initialState: TasksState = {
  tasks: Array.from({ length: 5 }, (_, i) => ({
    id: `${i}`,
    description: `Task ${i}`,
  })),
};
