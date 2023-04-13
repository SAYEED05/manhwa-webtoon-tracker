export type StateTypes = "idle" | "loading" | "error" | "success";

export type initialStateType = {
  loadingState: {
    isUpdating: StateTypes;
    isFetchingSearchResult: StateTypes;
  };
  errorMessage: null | string;
  currentSearchResult: [];
};
