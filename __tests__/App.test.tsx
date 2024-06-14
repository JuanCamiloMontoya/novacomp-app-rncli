import { fireEvent, render, screen } from "@testing-library/react-native";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "../src/services/users/slice";
import App from "../src";

const mockedNavigate = jest.fn();

jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

describe("test in Home screen", () => {
  it("renders correctly", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    expect(screen.getByText("Tasks")).toBeTruthy();
    expect(screen.getByText("List")).toBeTruthy();
  });

  it("navigation to tasks", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    const taskButton = screen.getByTestId("Tasks");
    fireEvent.press(taskButton);
    expect(mockedNavigate).toHaveBeenCalledWith("Tasks");
  });

  it("navigation to list", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    const listButton = screen.getByTestId("List");
    fireEvent.press(listButton);
    expect(mockedNavigate).toHaveBeenCalledWith("List");
  });
});
