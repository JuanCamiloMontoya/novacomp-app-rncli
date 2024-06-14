import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { usersThunks } from "./thunks";

const thunks = usersThunks();
const { getUsers } = thunks;
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getUsers.pending, state => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getUsers.fulfilled, (state, { payload }) => {
      state.users = payload;
      state.isLoading = false;
    });
    builder.addCase(getUsers.rejected, (state, { payload }) => {
      state.error = payload?.message;
    });
  },
});

const usersActions = { ...usersSlice.actions, ...thunks };
const usersReducer = usersSlice.reducer;

export { usersActions, usersReducer };
