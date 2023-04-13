import { query, getDocs, collection, where, addDoc } from "firebase/firestore";
import { auth, googleAuthProvider, db } from "../firebase/index";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsUpdatingState,
  setErrorMessage,
  setIsFetchingSearchResult,
  updateSearchResults,
} from "./slice";
import {
  selectErrorMessage,
  selectLoadingState,
  selectSearchResults,
} from "./selectors";
import { useMutation } from "react-query";
import { scrapeMangaDetails } from "./api";
import { useOverallUiControlHook } from "../overallUIControls/hook";

export const useContentUpdateHook = () => {
  const dispatch = useDispatch();
  const { setSnackBarState } = useOverallUiControlHook();

  const addNewContentToDB = async (payload: any) => {
    dispatch(setErrorMessage(null));
    dispatch(setIsUpdatingState("loading"));
    await addDoc(collection(db, "content"), {
      ...payload,
    })
      .then(() => {
        console.log("success");
        dispatch(setIsUpdatingState("success"));
        dispatch(setErrorMessage(null));
        setSnackBarState({
          open: true,
          message: "Added Successfully",
          type: "success",
          meta: {
            source: "useContentUpdateHook/addNewContentToDB",
          },
        });
      })
      .catch((err: any) => {
        console.log("error");
        dispatch(setErrorMessage(err?.message));
        setSnackBarState({
          open: true,
          message: "Failed",
          type: "error",
          meta: {
            source: "useContentUpdateHook/addNewContentToDB",
          },
        });
      });
  };

  const searchContent = async (query_string: string) => {
    dispatch(setIsFetchingSearchResult("loading"));
    const results: any = [];

    const q = query(
      collection(db, "content"),
      where("title", ">=", query_string),
      where("title", "<=", query_string + "\uf8ff")
    );

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      results.push({ id: doc.id, ...doc.data() });
    });
    dispatch(updateSearchResults(results));
    dispatch(setIsFetchingSearchResult("success"));
    return;
  };

  const {
    mutate: scrapeMangaDetailsFromUrl,
    isLoading: isScrapping,
    isError: scrappingError,
    isSuccess: scrappingSuccess,
    data: scrapedData,
  } = useMutation(scrapeMangaDetails);

  const isUpdating = useSelector(selectLoadingState).isUpdating === "loading";
  const searchResults = useSelector(selectSearchResults);
  const isUpdatingSuccess =
    useSelector(selectLoadingState).isUpdating === "success";
  const isUpdatingError =
    useSelector(selectLoadingState).isUpdating === "error";
  const ErrorMessage = useSelector(selectErrorMessage);

  const isFetchingSearchResult =
    useSelector(selectLoadingState).isFetchingSearchResult === "loading";
  const isFetchingSearchResultSuccess =
    useSelector(selectLoadingState).isFetchingSearchResult === "success";
  const isFetchingSearchResultError =
    useSelector(selectLoadingState).isFetchingSearchResult === "error";

  return {
    addNewContentToDB,
    isUpdating,
    isUpdatingSuccess,
    isUpdatingError,
    ErrorMessage,
    scrapeMangaDetailsFromUrl,
    isScrapping,
    scrapedData,
    searchContent,
    isFetchingSearchResult,
    isFetchingSearchResultSuccess,
    isFetchingSearchResultError,
    searchResults,
  };
};
