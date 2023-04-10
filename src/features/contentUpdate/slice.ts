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
    setIsFetchingSearchResult: (state, action: PayloadAction<StateTypes>) => {
      state.loadingState.isFetchingSearchResult = action.payload;
    },
    setErrorMessage: (state, action: PayloadAction<null | string>) => {
      state.errorMessage = action.payload;
    },
    updateSearchResults: (state, action) => {
      state.currentSearchResult = action.payload;
    },
  },
});

export const {
  setIsUpdatingState,
  setErrorMessage,
  updateSearchResults,
  setIsFetchingSearchResult,
} = conentUpdateSlice.actions;

export default conentUpdateSlice.reducer;
