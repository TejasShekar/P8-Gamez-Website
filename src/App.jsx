import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { Header } from "./components";
import { HomePage, ProductListing, Cart, Wishlist, Login, SignUp } from "./pages";

function App() {
  const { pathname } = useLocation();
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
      {pathname !== ("/login" || "/signup") && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
