export const filterReducer = (state, { type, payload }) => {
  switch (type) {
    case "SORT":
      return { ...state, sortBy: payload };
    case "CATEGORY":
      return {
        ...state,
        category: { ...state.category, [payload]: !state.category[payload] },
      };
    case "PRICE":
      return { ...state, price: payload };
    case "RATING":
      return { ...state, rating: payload };
    case "CLEAR_FILTERS":
      return {
        sortBy: "",
        category: {
          action: false,
          adventure: false,
          racing: false,
          sports: false,
        },
        price: 5000,
        rating: 0,
      };
    default:
      return state;
  }
};
