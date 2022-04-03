import { Link } from "react-router-dom";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export const Login = () => {
  useDocumentTitle("P8-Gamez | Login");
  return (
    <main className="full-height flex-center">
      <div className="auth-form pos-relative flex-sbw-c flex-col w-90 scale-85">
        <Link to="/" className="brand-name p-sm m-1">
          <h1>P8 Gamez</h1>
        </Link>
        <div className="flex flex-col m-1 w-90">
          <h2 className="auth-heading mb-1">Login</h2>
          <label className="input-label" htmlFor="u-name">
            Username
          </label>
          <input
            className="mb-1"
            id="u-name"
            type="text"
            placeholder="Enter your username here"
          />
          <label className="input-label" htmlFor="u-password">
            Password
          </label>
          <input
            className="mb-1"
            id="u-password"
            type="password"
            placeholder="Enter your password here"
          />
          <div className="auth-options flex-sbw flex-wrap">
            <div>
              <input id="remember-me" type="checkbox" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <Link className="active p-sm" to="/login">
              Forgot your password ?
            </Link>
          </div>
          <Link className="btn btn-primary m-sm py-sm px-1" to="/login">
            Login
          </Link>
          <Link className="link btn p-sm m-sm" to="/signup">
            Create an account &gt;
          </Link>
        </div>
      </div>
    </main>
  );
};
