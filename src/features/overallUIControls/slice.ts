import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { initialStateType } from "./types";

export const initialState: initialStateType = {
  snackBar: {
    open: false,
    type: "success",
    message: "",
    meta: {},
  },
};

export const overallUiControlSlice = createSlice({
  name: "overallUiControl",
  initialState,
  reducers: {
    toggleSnackBar: (state, action: PayloadAction<any>) => {
      state.snackBar = action.payload;
    },
  },
});

export const { toggleSnackBar } = overallUiControlSlice.actions;

export default overallUiControlSlice.reducer;
