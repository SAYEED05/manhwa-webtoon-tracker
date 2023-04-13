import { createSelector } from "@reduxjs/toolkit";
import { initialState } from "./slice";
import { RootState } from "../../redux-store/store";

const selectSlice = (state: RootState) =>
  state.overallUiControl || initialState;

export const selectSnackBarState = createSelector(
  [selectSlice],
  (state) => state.snackBar
);
