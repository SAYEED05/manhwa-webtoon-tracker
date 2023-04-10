import { query, getDocs, collection, where, addDoc } from "firebase/firestore";
import { auth, googleAuthProvider, db } from "../firebase/index";
import { useDispatch, useSelector } from "react-redux";
import { setIsUpdatingState, setErrorMessage } from "./slice";
import { selectErrorMessage, selectLoadingState } from "./selectors";
import { useMutation } from "react-query";
import { scrapeMangaDetails } from "./api";

export const useContentUpdateHook = () => {
  const dispatch = useDispatch();

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
      })
      .catch((err: any) => {
        console.log("error");
        dispatch(setErrorMessage(err?.message));
      });
  };

  const searchContent = async (query_string: string) => {
    const results: any = [];

    const q = query(
      collection(db, "content"),
      where("name", ">=", query_string),
      where("name", "<=", query_string + "\uf8ff")
    );

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      results.push({ id: doc.id, ...doc.data() });
    });

    return results;
  };

  const {
    mutate: scrapeMangaDetailsFromUrl,
    isLoading: isScrapping,
    isError: scrappingError,
    isSuccess: scrappingSuccess,
    data: scrapedData,
  } = useMutation(scrapeMangaDetails);

  const isUpdating = useSelector(selectLoadingState).isUpdating === "loading";
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
  };
};
