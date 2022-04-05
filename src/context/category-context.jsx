import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

const CategoryContext = createContext();
const useCategory = () => useContext(CategoryContext);

const CategoryProvider = ({ children }) => {
  const [categoryData, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      const res = await axios.get("./api/categories");
      setCategories((_prevData) => res.data.categories);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <CategoryContext.Provider value={{ categoryData }}>
      {children}
    </CategoryContext.Provider>
  );
};

export { useCategory, CategoryProvider };
