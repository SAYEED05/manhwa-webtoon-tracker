import { useDispatch, useSelector } from "react-redux";
import { toggleSnackBar } from "./slice";
import { selectSnackBarState } from "./selectors";
import { SnackBarType } from "./types";

export const useOverallUiControlHook = () => {
  const dispatch = useDispatch();
  const setSnackBarState = (state: SnackBarType) => {
    return dispatch(toggleSnackBar(state));
  };
  const snackBarState = useSelector(selectSnackBarState);
  return {
    setSnackBarState,
    snackBarState,
  };
};
