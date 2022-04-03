import { Link } from "react-router-dom";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export const SignUp = () => {
  useDocumentTitle("P8-Gamez | Signup");
  return (
    <main className="full-height flex-center">
      <div className="auth-form pos-relative flex-sbw-c flex-col w-90 scale-85">
        <Link to="/" className="brand-name p-sm m-1">
          <h1>P8 Gamez</h1>
        </Link>
        <div className="flex flex-col m-1 w-90">
          <h2 className="auth-heading mb-1">Sign Up</h2>
          <label className="input-label" htmlFor="first-name">
            First Name
          </label>
          <input className="mb-1" id="first-name" type="text" />
          <label className="input-label" htmlFor="last-name">
            Last Name
          </label>
          <input className="mb-1" id="last-name" type="text" />
          <label className="input-label" htmlFor="u-email">
            E-mail
          </label>
          <input className="mb-1" id="u-email" type="email" />
          <label className="input-label" htmlFor="u-password">
            Password
          </label>
          <input className="mb-1" id="u-password" type="password" />
          <label className="input-label" htmlFor="u-password-confirm">
            Confirm Password
          </label>
          <input className="mb-1" id="u-password-confirm" type="password" />
          <div>
            <input id="agree-checkbox" type="checkbox" />
            <label htmlFor="agree-checkbox">I agree to T&C</label>
          </div>
          <Link className="btn btn-primary m-sm py-sm px-1" to="/signup">
            Sign Up
          </Link>
          <Link className="link btn p-sm m-sm" to="/login">
            Already have an account ?
          </Link>
        </div>
      </div>
    </main>
  );
};
