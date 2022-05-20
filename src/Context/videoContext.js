import { createContext, useContext, useReducer } from "react";
import axios from "axios";
import { InitialState } from "../Utils/initialState";
import { Reducer } from "../Utils/reducer";

const VideoContext = createContext();

const VideoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, InitialState);
  const { data: allVideos, loading: iscardLoading, error: cardError } = state;

  const getAllVideos = async () => {
    dispatch({ type: "LOADING" });
    try {
      const response = await axios.get("/api/videos");
      if (response.status === 200) {
        dispatch({ type: "SUCCESS", payload: response.data.videos });
      }
    } catch (error) {
      console.error(error);
      dispatch({ type: "ERROR", payload: error });
    }
  };
  return (
    <VideoContext.Provider
      value={{ getAllVideos, allVideos, iscardLoading, cardError }}
    >
      {children}
    </VideoContext.Provider>
  );
};

const useVideo = () => useContext(VideoContext);

export { VideoProvider, useVideo };
