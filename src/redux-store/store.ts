import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../features/auth/slice";
import { conentUpdateSlice } from "../features/contentUpdate/slice";
import { overallUiControlSlice } from "../features/overallUIControls//slice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    contentUpdate: conentUpdateSlice.reducer,
    overallUiControl: overallUiControlSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
