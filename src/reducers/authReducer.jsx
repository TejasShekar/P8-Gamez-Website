export const authReducer = (authState, { type, payload }) => {
  switch (type) {
    case "SET_AUTH":
      return {
        isAuth: payload.auth,
        loginError: "",
        signupError: "",
        token: payload.token,
        userDetails: payload.userDetails,
      };
    case "SET_LOGIN_ERROR":
      return { ...authState, isAuth: payload.auth, loginError: payload.error };
    case "SET_SIGNUP_ERROR":
      return { ...authState, isAuth: payload.auth, signupError: payload.error };
    case "SET_AUTH_LOGOUT":
      return {
        isAuth: false,
        token: "",
        signupError: "",
        loginError: "",
        userDetails: {},
      };
    default:
      return authState;
  }
};
