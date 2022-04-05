import { Link } from "react-router-dom";
import { useCategory } from "../context/category-context";

export const Categories = () => {
  const { categoryData } = useCategory();

  return (
    <>
      <h2 className="category-heading mt-1 text-center">C A T E G O R I E S</h2>
      <div id="categories" className="flex-c flex-wrap g-1 m-1">
        {categoryData.map(({ _id, categoryName, src, name }) => (
          <div key={_id} className="category pos-relative">
            <img className="category-img" src={src} alt={categoryName} />
            <Link
              to="/products"
              className="link category-text pos-abs flex flex-col p-1"
            >
              <h2>{name}</h2>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};
