import axios from "axios";
import { Link } from "react-router-dom";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useState } from "react";
import { useAuth } from "../context";
import { toast } from "react-toastify";

const guestUser = { email: "tonystark3000@gmail.com", password: "iloveyou@3000" };
const initialUser = { email: "", password: "" };

export const Login = () => {
  const [userData, setUserData] = useState(initialUser);
  const [togglePassword, setTogglePassword] = useState(false);
  const { authState, authDispatch } = useAuth();
  useDocumentTitle("P8-Gamez | Login");

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const { status, data } = await axios.post(`/api/auth/login`, {
        email: userData.email,
        password: userData.password,
      });
      console.log(data);
      if (status === 200) {
        authDispatch({
          type: "SET_AUTH",
          payload: {
            auth: true,
            userDetails: data.foundUser,
            token: data.encodedToken,
          },
        });
        const {
          foundUser: { firstName, lastName },
        } = data;
        toast.success(
          <div>
            Welcome back, {firstName} {lastName}
          </div>
        );
        localStorage.setItem("p8_token", JSON.stringify(data.encodedToken));
        localStorage.setItem("isAuth", JSON.stringify(true));
        localStorage.setItem("p8_userDetails", JSON.stringify(data.foundUser));
      }
    } catch (err) {
      authDispatch({
        type: "SET_LOGIN_ERROR",
        payload: { auth: false, error: err.response.data.errors[0] },
      });
    }
  };

  return (
    <main className="full-height flex-center">
      <form
        onSubmit={loginHandler}
        className="auth-form pos-relative flex-sbw-c flex-col w-90 scale-85"
      >
        <Link to="/" className="brand-name p-sm m-1">
          <h1>P8 Gamez</h1>
        </Link>
        <div className="flex flex-col m-1 w-90">
          <h2 className="auth-heading mb-1">Login</h2>
          <label className="input-label" htmlFor="u-name">
            Email
          </label>
          <input
            id="u-name"
            className="mb-1"
            type="text"
            placeholder="example@gmail.com"
            value={userData.email}
            onChange={(e) => setUserData((prev) => ({ ...prev, email: e.target.value }))}
            required
          />
          <label className="input-label" htmlFor="u-password">
            Password
          </label>
          <div className="pos-relative">
            <input
              id="u-password"
              className="mb-1 width-full"
              type={togglePassword ? "text" : "password"}
              value={userData.password}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, password: e.target.value }))
              }
              required
            />
            <button
              className="toggle-icon"
              type="button"
              onClick={() => setTogglePassword((prev) => !prev)}
            >
              <i className={togglePassword ? "fas fa-eye" : "fas fa-eye-slash"}></i>
            </button>
          </div>

          <button className="btn btn-primary m-sm py-sm px-1" type="submit">
            Login
          </button>
          <button
            className="btn btn-secondary m-sm py-sm px-1"
            type="submit"
            onClick={() => setUserData(guestUser)}
          >
            Login as Guest
          </button>
          {authState.loginError.length !== 0 ? (
            <div className="form-error p-sm">
              <i className="fas fa-exclamation-circle pr-sm"></i>
              The email you entered is not registered
            </div>
          ) : null}
          <Link className="link btn p-sm m-sm" to="/signup">
            Create an account &gt;
          </Link>
        </div>
      </form>
    </main>
  );
};
