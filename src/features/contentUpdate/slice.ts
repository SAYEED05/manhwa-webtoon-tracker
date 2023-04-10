import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { initialStateType, StateTypes } from "./types";

export const initialState: initialStateType = {
  loadingState: {
    isUpdating: "idle",
    isFetchingSearchResult: "idle",
  },
  errorMessage: null,
  currentSearchResult: [],
};

export const conentUpdateSlice = createSlice({
  name: "content-update",
  initialState,
  reducers: {
    setIsUpdatingState: (state, action: PayloadAction<StateTypes>) => {
      state.loadingState.isUpdating = action.payload;
    },
    setErrorMessage: (state, action: PayloadAction<null | string>) => {
      state.errorMessage = action.payload;
    },
  },
});

export const { setIsUpdatingState, setErrorMessage } =
  conentUpdateSlice.actions;

export default conentUpdateSlice.reducer;
