import { createContext, useContext, useReducer } from "react";
import axios from "axios";
import { InitialState } from "../Utils/initialState";
import { Reducer } from "../Utils/reducer";

const WatchLaterContext = createContext(InitialState);

const WatchLaterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, InitialState);
  const {
    data: watchLaterVideos,
    loading: isWatchLaterVideoLoading,
    error: watchlaterVideoError,
  } = state;

  const config = {
    headers: {
      authorization: localStorage.getItem("videoToken"),
    },
  };

  const getWatchLaterVideos = async () => {
    dispatch({ type: "LOADING" });
    try {
      const response = await axios.get("/api/user/watchlater", config);
      if (response.status === 200) {
        dispatch({ type: "SUCCESS", payload: response.data.watchlater });
      }
    } catch (error) {
      dispatch({ type: "ERROR", payload: error });
      console.error(error);
    }
  };

  const addItemToWatchLater = async (video) => {
    console.log("videos:", video);
    dispatch({ type: "LOADING" });
    try {
      const response = await axios.post(
        "/api/user/watchlater",
        { video },
        config
      );
      if (response.status === 201) {
        dispatch({ type: "SUCCESS", payload: response.data.watchlater });
      }
    } catch (error) {
      dispatch({ type: "ERROR", payload: error });
      console.error(error);
    }
  };

  const removeItemFromWatchLater = async (_id) => {
    console.log("hello");
    dispatch({ type: "LOADING" });
    try {
      const response = await axios.delete(
        `/api/user/watchlater/${_id}`,
        config
      );
      if (response.status === 200) {
        dispatch({ type: "SUCCESS", payload: response.data.watchlater });
      }
    } catch (error) {
      dispatch({ type: "ERROR", payload: error });
    }
  };
  return (
    <WatchLaterContext.Provider
      value={{
        watchLaterVideos,
        isWatchLaterVideoLoading,
        watchlaterVideoError,
        getWatchLaterVideos,
        addItemToWatchLater,
        removeItemFromWatchLater,
      }}
    >
      {children}
    </WatchLaterContext.Provider>
  );
};

const useWatchLater = () => useContext(WatchLaterContext);

export { useWatchLater, WatchLaterProvider };
