export type StateTypes = "idle" | "loading" | "error" | "success";

export type initialStateType = {
  loadingState: StateTypes;
  errorMessage: null | string;
};
