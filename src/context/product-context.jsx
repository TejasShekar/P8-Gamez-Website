import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

const ProductContext = createContext();
const useProducts = () => useContext(ProductContext);

const ProductProvider = ({ children }) => {
  const [productsList, setProducts] = useState([]);
  const [loader, setLoader] = useState(false);

  const getProducts = async () => {
    try {
      setLoader(true);
      const res = await axios.get("./api/products");
      setProducts((_prevData) => res.data.products);
      setLoader(false);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ productsList, loader }}>
      {children}
    </ProductContext.Provider>
  );
};

export { useProducts, ProductProvider };
