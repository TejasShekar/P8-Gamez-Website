import { Link, useLocation } from "react-router-dom";
// import { useState } from "react";
import { useCart } from "../context/cart-context";
import { calcQuantity } from "../utils/cartSummary";
import { useAuth } from "../context";
import { toast } from "react-toastify";

export const Header = () => {
  const location = useLocation();
  // const [search, setSearch] = useState("");
  const { cartState } = useCart();
  const totalQuantity = calcQuantity(cartState.cartItems);
  const {
    authState: { isAuth },
    authDispatch,
  } = useAuth();

  const logoutHandler = () => {
    localStorage.clear();
    authDispatch({ type: "SET_AUTH_LOGOUT" });
    toast.info(<div>See you soon !</div>);
  };
  return (
    <>
      <header className="header flex-sbw-c flex-wrap pl-2">
        {location.pathname === "/" && (
          <>
            <Link to="/products">
              <h2>STORE</h2>
            </Link>
            <Link to="/" className="p-sm ml-3">
              <h1 className="brand-name">
                P8 {""}
                <i className="fas fa-fire"></i>
              </h1>
            </Link>
          </>
        )}
        {location.pathname !== "/" && (
          <>
            <Link to="/" className="p-sm">
              <h1 className="brand-name">
                P8 {""}
                <i className="fas fa-fire"></i>
              </h1>
            </Link>
            {/* Search Feature to be implemented soon */}
            {/* <label className="flex-center g-1">
              <input
                type="search"
                id="search-box"
                value={search}
                placeholder="Search for products"
                onChange={(e) => setSearch(e.target.value)}
              />
              <i className="fas fa-search search-btn"></i>
            </label> */}
          </>
        )}
        <nav className="mx-1">
          <ul className="nav-list flex-sbw-c">
            <li className="mx-0 my-auto">
              <Link to="/cart" className="link btn btn-icon my-sm mx-1 btn-link">
                <div className="pos-relative">
                  <div>
                    <i className="fas fa-shopping-cart fa-2x"></i>
                    {cartState.cartItems.length !== 0 && (
                      <div className="notification-icon badge pos-abs flex-center">
                        {totalQuantity}
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            </li>
            <li className="mx-1 my-auto">
              <Link to="/wishlist" className="link btn btn-icon my-sm mx-1 btn-link">
                <div className="pos-relative">
                  <div>
                    <i className="fas fa-heart fa-2x"></i>
                    {cartState.wishlist.length !== 0 && (
                      <div className="notification-icon badge pos-abs flex-center">
                        {cartState.wishlist.length}
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            </li>
            <li className="mx-0 my-auto">
              {isAuth ? (
                <button
                  className="link btn py-sm px-1 btn-secondary"
                  onClick={logoutHandler}
                >
                  Logout
                </button>
              ) : (
                <Link to="/login" className="link btn py-sm px-1 btn-secondary">
                  Login
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
