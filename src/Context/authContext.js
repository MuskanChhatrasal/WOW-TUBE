import { createContext, useContext, useReducer } from "react";
import axios from "axios";

export const InitialAuthData = {
  authData: {},
  authErrorMsg: "",
};

export const AuthReducer = (state, { type, payload }) => {
  switch (type) {
    case "SIGN_UP":
      return { ...state, authData: payload };
    case "SIGN_UP_ERROR":
      return { ...state, authErrorMsg: payload };
    case "LOGIN":
      return { ...state, authData: payload };
    case "LOGIN_ERROR":
      return { ...state, authErrorMsg: payload };
    case "REMOVE_ERROR_MSG":
      return { ...state, authErrorMsg: payload };
    case "LOGOUT":
      return { ...state, authData: payload };
    default:
      return state;
  }
};

const AuthContext = createContext(InitialAuthData);

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(AuthReducer, InitialAuthData);
  const { authData, authErrorMsg } = authState;

  const signup = async (userDetails) => {
    console.log("user:", userDetails);
    try {
      const response = await axios.post("/api/auth/signup", {
        firstName: userDetails.firstName,
        lastName: userDetails.lastName,
        email: userDetails.email,
        password: userDetails.password,
      });
      console.log("response:", response.data);
      if (response.status === 201) {
        localStorage.setItem("videoToken", response.data.encodedToken);
        authDispatch({ type: "SIGN_UP", payload: response.data.createdUser });
      }
    } catch (error) {
      console.error(error);
      if (error.response.status === 422) {
        authDispatch({
          type: "SIGN_UP_ERROR",
          payload: "The email already exists",
        });
      }
    }
  };

  return (
    <AuthContext.Provider value={{ signup, authData, authErrorMsg }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
