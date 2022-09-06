import { createContext, useContext, useReducer } from "react";
import { authReducer } from "../reducers/authReducer";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

const initialAuthState = {
  isAuth: JSON.parse(localStorage.getItem("isAuth")) ?? false,
  token: JSON.parse(localStorage.getItem("p8_token")) ?? "",
  userDetails: JSON.parse(localStorage.getItem("p8_userDetails")) ?? {},
  loginError: "",
  signupError: "",
};

export const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, initialAuthState);
  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
