import { createContext, useContext, useReducer, useState } from "react";
import axios from "axios";
import { InitialState } from "../Utils/initialState";
import { Reducer } from "../Utils/reducer";

const CategoryContext = createContext(InitialState);

const CategoryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, InitialState);
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
