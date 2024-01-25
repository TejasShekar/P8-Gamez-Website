import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useCategory } from "../context/category-context";
import { useFilter } from "../context/filter-context";

export const Categories = () => {
  const { categoryData } = useCategory();
  const { filterDispatch } = useFilter();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === "/") {
      filterDispatch({ type: "CLEAR_FILTERS" });
    }
  }, [filterDispatch, pathname]);

  const categoryRedirectHandler = (categoryName) => {
    filterDispatch({ type: "CATEGORY", payload: categoryName });
    navigate("/products");
  };

  return (
    <>
      <h2 className="category-heading mt-1 text-center">C A T E G O R I E S</h2>
      <div className="categories g-1 m-1">
        {categoryData.map(({ _id, categoryName, src, name }) => (
          <div
            key={_id}
            className="category pos-relative"
            onClick={() => categoryRedirectHandler(categoryName)}
          >
            <img className="category-img" src={src} alt={categoryName} />
            <div className="link category-text pos-abs flex flex-col p-1">
              <h2>{name}</h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
