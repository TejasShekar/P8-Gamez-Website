export const authReducer = (authState, { type, payload }) => {
  switch (type) {
    case "SET_AUTH":
      return {
        isAuth: payload.auth,
        loginError: "",
        token: payload.token,
        userDetails: payload.userDetails,
      };
    case "SET_LOGIN_ERROR":
      return { ...authState, isAuth: payload.auth, loginError: payload.error };
    case "SET_AUTH_LOGOUT":
      return {
        isAuth: false,
        token: "",
        loginError: "",
        userDetails: {},
      };
    default:
      return authState;
  }
};
