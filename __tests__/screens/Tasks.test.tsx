import { fireEvent, screen } from "@testing-library/react-native";
import TasksScreen from "../../src/screens/tasks";
import { renderWithProviders } from "../utils/store";

describe("test in Tasks screen", () => {
  it("renders correctly", () => {
    renderWithProviders(<TasksScreen />);
    expect(screen.getByText("New Task")).toBeTruthy();
  });

  it("renders initial state", () => {
    const screen = renderWithProviders(<TasksScreen />, {
      preloadedState: {
        tasks: { tasks: [{ id: "1", description: "Task 1" }] },
      },
    });
    expect(screen.getByText("Task 1")).toBeTruthy();
  });

  it("add a new task", () => {
    const screen = renderWithProviders(<TasksScreen />);

    const newTaskButton = screen.getByText("New Task");
    fireEvent.press(newTaskButton);

    expect(screen.getByTestId("newTaskModal")).toBeTruthy();

    const taskField = screen.getByTestId("taskInput");
    const addButton = screen.getByTestId("Add");

    fireEvent.press(addButton);
    expect(screen.getByTestId("errMsg")).toBeTruthy();

    fireEvent.changeText(taskField, "Home clean");
    fireEvent.press(addButton);
    expect(screen.queryByTestId("errMsg")).toBeNull();

    expect(screen.getByText("Home clean")).toBeTruthy();
  });
});
