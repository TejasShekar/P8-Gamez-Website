import { createContext, useContext, useReducer } from "react";
import { useEffect } from "react";
import { filterReducer } from "../reducers/filterReducer";

const FilterContext = createContext();
const useFilter = () => useContext(FilterContext);

const FilterProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(filterReducer, {
    sortBy: "",
    category: {
      action: false,
      adventure: false,
      racing: false,
      sports: false,
    },
    price: 4500,
    rating: 0,
  });

  useEffect(() => {
    filterDispatch({
      type: "SET_SAVED_FILTERS",
      payload: JSON.parse(sessionStorage.getItem("filters")),
    });
  }, []);

  useEffect(() => {
    sessionStorage.setItem("filters", JSON.stringify(filterState));
  });

  return (
    <FilterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

export { useFilter, FilterProvider };
