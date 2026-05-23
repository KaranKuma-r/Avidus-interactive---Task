import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],

  isLoading: false,

  isError: false,
};

const taskSlice = createSlice({
  name: "tasks",

  initialState,

  reducers: {
    taskRequest: (state) => {
      state.isLoading = true;
    },

    taskSuccess: (
      state,
      action
    ) => {
      state.isLoading = false;

      state.tasks = action.payload;
    },

    taskFailure: (state) => {
      state.isLoading = false;

      state.isError = true;
    },
  },
});

export const {
  taskRequest,
  taskSuccess,
  taskFailure,
} = taskSlice.actions;

export default taskSlice.reducer;