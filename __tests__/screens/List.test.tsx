import React from "react";
import { screen } from "@testing-library/react-native";
import ListScreen from "../../src/screens/list";
import { renderWithProviders } from "../utils/store";
import { mockAxiosGet } from "../utils/axiosMock";

describe("test in List screen", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("list data correctly", async () => {
    const mockData = [
      { id: "1", name: "User 1", avatar: "https://example.com/avatar1.png" },
      { id: "2", name: "User 2", avatar: "https://example.com/avatar2.png" },
    ];
    mockAxiosGet(
      "https://6172cfe5110a740017222e2b.mockapi.io/elements",
      mockData,
    );

    renderWithProviders(<ListScreen />);

    await screen.findByText("User 1");
    expect(screen.getByText("User 2")).toBeTruthy();

    expect(screen.queryByText(/Error al obtener los usuarios/)).toBeNull();
  });

  it("displays error message on API failure", async () => {
    const errorMessage = "Error de prueba";
    mockAxiosGet(
      "https://6172cfe5110a740017222e2b.mockapi.io/elements",
      null,
      errorMessage,
    );

    renderWithProviders(<ListScreen />);

    expect(
      await screen.findByText(`Error al obtener los usuarios: ${errorMessage}`),
    ).toBeTruthy();
  });
});
