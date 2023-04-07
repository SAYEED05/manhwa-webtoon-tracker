import { createSelector } from "@reduxjs/toolkit";
import { initialState } from "./slice";
import { RootState } from "../../redux-store/store";

const selectSlice = (state: RootState) => state.contentUpdate || initialState;

export const selectLoadingState = createSelector(
  [selectSlice],
  (state) => state.loadingState
);
export const selectErrorMessage = createSelector(
  [selectSlice],
  (state) => state.errorMessage
);
