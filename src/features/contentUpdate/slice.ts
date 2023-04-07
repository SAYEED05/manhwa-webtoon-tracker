import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { initialStateType, StateTypes } from "./types";

export const initialState: initialStateType = {
  loadingState: "idle",
  errorMessage: null,
};

export const conentUpdateSlice = createSlice({
  name: "content-update",
  initialState,
  reducers: {
    setLoadingState: (state, action: PayloadAction<StateTypes>) => {
      state.loadingState = action.payload;
    },
    setErrorMessage: (state, action: PayloadAction<null | string>) => {
      state.errorMessage = action.payload;
    },
  },
});

export const { setLoadingState, setErrorMessage } = conentUpdateSlice.actions;

export default conentUpdateSlice.reducer;
