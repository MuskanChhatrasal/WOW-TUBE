import { createContext, useContext, useReducer, useState } from "react";
import axios from "axios";

export const InitialSharedState = {
  error: null,
  loading: false,
  data: [],
};

export const SharedReducer = (state, { type, payload }) => {
  switch (type) {
    case "LOADING":
      return { ...state, loading: true };
    case "SUCCESS":
      return { ...state, loading: false, data: payload };
    case "ERROR":
      return { ...state, loading: false, error: payload };
  }
};

const CategoryContext = createContext(InitialSharedState);

const CategoryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SharedReducer, InitialSharedState);
  const {
    data: categoryData,
    loading: ischipLoading,
    error: chipError,
  } = state;

  const [selectedCategory, setSelectedCategory] = useState("All");

  const getCategories = async () => {
    dispatch({ type: "LOADING" });
    try {
      const response = await axios.get("/api/categories");
      if (response.status === 200) {
        console.log(response.data.categories);
        dispatch({ type: "SUCCESS", payload: response.data.categories });
      }
    } catch (error) {
      dispatch({ type: "ERROR", payload: error });
      console.error(error);
    }
  };

  return (
    <CategoryContext.Provider
      value={{
        getCategories,
        selectedCategory,
        setSelectedCategory,
        categoryData,
        ischipLoading,
        chipError,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

const useCategory = () => useContext(CategoryContext);

export { useCategory, CategoryProvider };
