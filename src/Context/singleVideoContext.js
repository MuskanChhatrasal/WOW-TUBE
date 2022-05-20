import { createContext, useContext, useReducer } from "react";
import axios from "axios";
import { InitialState } from "../Utils/initialState";
import { Reducer } from "../Utils/reducer";

const SingleVideoContext = createContext(InitialState);

const SingleVideoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, InitialState);
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
