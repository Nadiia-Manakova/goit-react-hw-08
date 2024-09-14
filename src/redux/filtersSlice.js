import { createSlice } from "@reduxjs/toolkit";

// export const setStatusFilter = createAction("filter/setStatusFilter");

const slice = createSlice({
  name: "filter",
  initialState: {
    status: "",
  },
  reducers: {
    changeFilter: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { changeFilter } = slice.actions;

export default slice.reducer;
