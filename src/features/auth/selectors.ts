import { createSelector } from "@reduxjs/toolkit";
import { initialState } from "./slice";
import { RootState } from "../../redux-store/store";

const selectSlice = (state: RootState) => state.auth || initialState;

export const selectUser = createSelector([selectSlice], (state) => state.user);
export const selectLoading = createSelector(
  [selectSlice],
  (state) => state.loading
);
export const selectError = createSelector(
  [selectSlice],
  (state) => state.error
);
