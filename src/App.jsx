import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { Header, RequireAuth } from "./components";
import { useAuth } from "./context";
import { HomePage, ProductListing, Cart, Wishlist, Login, SignUp } from "./pages";

function App() {
  const { pathname } = useLocation();
  const location = useLocation();
  const previousRoute = location.state?.from?.pathname ?? "/products";
  const {
    authState: { isAuth },
  } = useAuth();

  return (
    <div className="App">
      <ToastContainer
        theme="colored"
        position="top-right"
        transition={Zoom}
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
      />
      {pathname !== "/login" && pathname !== "/signup" && <Header />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductListing />} />
        <Route element={<RequireAuth />}>
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Route>
        {isAuth ? (
          <>
            <Route path="/login" element={<Navigate to={previousRoute} replace />} />
            <Route path="/signup" element={<Navigate to={previousRoute} replace />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
