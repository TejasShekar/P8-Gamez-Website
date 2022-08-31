import { createContext, useContext, useReducer } from "react";
import { useEffect } from "react";
import { filterReducer } from "../reducers/filterReducer";

const FilterContext = createContext();
const useFilter = () => useContext(FilterContext);

const initialFilterState = {
  sortBy: "",
  category: {
    action: false,
    adventure: false,
    racing: false,
    sports: false,
  },
  price: 4500,
  rating: 5,
};

const FilterProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(filterReducer, initialFilterState);

  useEffect(() => {
    filterDispatch({
      type: "SET_SAVED_FILTERS",
      payload: JSON.parse(sessionStorage.getItem("filters")) || initialFilterState,
    });
  }, []);

  useEffect(() => {
    sessionStorage.setItem("filters", JSON.stringify(filterState));
  }, [filterState]);

  return (
    <FilterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

export { useFilter, FilterProvider };
