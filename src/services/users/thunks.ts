import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ErrorMsgResponse, User } from "./models";

export const usersThunks = () => {
  const getUsers = createAsyncThunk<
    User[],
    any,
    { rejectValue: ErrorMsgResponse }
  >("users/get", async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        "https://6172cfe5110a740017222e2b.mockapi.io/elements",
      );
      return data;
    } catch (error: any) {
      return rejectWithValue({ message: error.toString() });
    }
  });

  return {
    getUsers,
  };
};
