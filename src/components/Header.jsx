import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header className="header flex-sbw-c flex-wrap">
        <Link to="/" className="p-sm m-1">
          <h1 className=" brand-name">P8 Gamez</h1>
        </Link>
        <label className="flex-center g-1">
          <input
            type="search"
            id="search-box"
            placeholder="Search for products"
          />
          <i className="fas fa-search search-btn"></i>
        </label>
        <nav className="mx-1">
          <ul className="nav-list flex-sbw">
            <li className="mx-0 my-auto">
              <Link
                to="/cart"
                className="link btn btn-icon my-sm mx-1 btn-link"
              >
                <div className="pos-relative">
                  <div>
                    <i className="fas fa-shopping-cart fa-2x"></i>
                    <div className="notification-icon badge pos-abs flex-center">
                      0
                    </div>
                  </div>
                </div>
              </Link>
            </li>
            <li className="mx-1 my-auto">
              <Link
                to="/wishlist"
                className="link btn btn-icon my-sm mx-1 btn-link"
              >
                <div className="pos-relative">
                  <div>
                    <i className="fas fa-heart fa-2x"></i>
                    <div className="notification-icon badge pos-abs flex-center">
                      0
                    </div>
                  </div>
                </div>
              </Link>
            </li>
            <li className="mx-0 my-auto">
              <Link to="/login" className="link btn py-sm px-1 btn-secondary">
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
