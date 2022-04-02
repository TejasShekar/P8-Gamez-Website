import { categories } from "../backend/db/categories";
import { Link } from "react-router-dom";

export const Categories = () => {
  return (
    <>
      <h2 className="category-heading mt-1 text-center">C A T E G O R I E S</h2>
      <div id="categories" className="flex-c flex-wrap g-1 m-1">
        {categories.map((category) => (
          <div key={category._id} className="category pos-relative">
            <img
              className="category-img"
              src={category.src}
              alt={category.categoryName}
            />
            <Link to="/products" className="link category-text pos-abs flex flex-col p-1">
              <h2>{category.name}</h2>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};
