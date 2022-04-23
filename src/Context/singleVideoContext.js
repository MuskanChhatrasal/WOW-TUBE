import { createContext, useContext, useReducer } from "react";
import axios from "axios";

const InitialSharedState = {
  error: null,
  loading: false,
  data: [],
};

const SharedReducer = (state, { type, payload }) => {
  switch (type) {
    case "LOADING":
      return { ...state, loading: true };
    case "SUCCESS":
      return { ...state, loading: false, data: payload };
    case "ERROR":
      return { ...state, loading: false, error: payload };
  }
};

const SingleVideoContext = createContext(InitialSharedState);

const SingleVideoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SharedReducer, InitialSharedState);
  const {
    data: singleVideo,
    loading: issinglecardLoading,
    error: singlecardError,
  } = state;

  const getSingleVideo = async (_id) => {
    dispatch({ type: "LOADING" });
    try {
      const response = await axios.get(`/api/video/${_id}`);
      if (response.status === 200) {
        dispatch({ type: "SUCCESS", payload: response.data.video });
      }
    } catch (error) {
      dispatch({ type: "ERROR", payload: error });
      console.error(error);
    }
  };
  return (
    <SingleVideoContext.Provider
      value={{
        singleVideo,
        issinglecardLoading,
        singlecardError,
        getSingleVideo,
      }}
    >
      {children}
    </SingleVideoContext.Provider>
  );
};

const useSingleVideo = () => useContext(SingleVideoContext);

export { useSingleVideo, SingleVideoProvider };
