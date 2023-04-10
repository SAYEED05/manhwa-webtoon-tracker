import { query, getDocs, collection, where, addDoc } from "firebase/firestore";
import { auth, googleAuthProvider, db } from "../firebase/index";
import { useDispatch, useSelector } from "react-redux";
import { setLoadingState, setErrorMessage } from "./slice";
import { selectErrorMessage, selectLoadingState } from "./selectors";
import { useMutation } from "react-query";
import { scrapeMangaDetails } from "./api";

export const useContentUpdateHook = () => {
  const dispatch = useDispatch();

  const addNewContentToDB = async (payload: any) => {
    dispatch(setErrorMessage(null));
    dispatch(setLoadingState("loading"));
    await addDoc(collection(db, "content"), {
      ...payload,
    })
      .then(() => {
        console.log("success");
        dispatch(setLoadingState("success"));
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

  const isLoading = useSelector(selectLoadingState) === "loading";
  const isSuccess = useSelector(selectLoadingState) === "success";
  const isError = useSelector(selectLoadingState) === "error";
  const ErrorMessage = useSelector(selectErrorMessage);

  return {
    addNewContentToDB,
    isLoading,
    isSuccess,
    isError,
    ErrorMessage,
    scrapeMangaDetailsFromUrl,
    isScrapping,
    scrapedData,
    searchContent,
  };
};
