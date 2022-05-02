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

const HistoryContext = createContext(InitialSharedState);

const HistoryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SharedReducer, InitialSharedState);
  const {
    data: HistoryData,
    loading: isHistoryLoading,
    error: HistoryError,
  } = state;

  const config = {
    headers: {
      authorization: localStorage.getItem("videoToken"),
    },
  };

  const getHistoryVideos = async () => {
    try {
      dispatch({ type: "LOADING" });
      const response = await axios.get("/api/user/history", config);
      if (response.status === 200) {
        dispatch({ type: "SUCCESS", payload: response.data.history });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const addVideoToHistory = async (video) => {
    try {
      dispatch({ type: "LOADING" });
      const response = await axios.post("/api/user/history", { video }, config);
      if (response.status === 201) {
        dispatch({ type: "SUCCESS", payload: response.data.history });
      }
    } catch (error) {
      if (error.response.status === 500) {
        console.error(error);
      }
    }
  };

  const removeVideoFromHistory = async (_id) => {
    try {
      dispatch({ type: "LOADING" });
      const response = await axios.delete(`api/user/history/${_id}`, config);
      if (response.status === 200) {
        dispatch({ type: "SUCCESS", payload: response.data.history });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const clearHistory = async () => {
    try {
      dispatch({ type: "LOADING" });
      const response = await axios.delete("/api/user/history/all", config);
      if (response.status === 200) {
        dispatch({ type: "SUCCESS", payload: response.data.history });
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <HistoryContext.Provider
      value={{
        HistoryData,
        isHistoryLoading,
        HistoryError,
        getHistoryVideos,
        addVideoToHistory,
        removeVideoFromHistory,
        clearHistory,
      }}
    >
      {children}
    </HistoryContext.Provider>
  );
};

const useHistory = () => useContext(HistoryContext);

export { HistoryProvider, useHistory };
