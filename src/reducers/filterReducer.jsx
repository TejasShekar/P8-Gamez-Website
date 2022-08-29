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
        price: 4500,
        rating: 5,
      };
    case "SET_SAVED_FILTERS":
      const savedCategory = Object.values(payload.category);
      return {
        ...state,
        sortBy: payload.sortBy,
        category: {
          action: savedCategory[0],
          adventure: savedCategory[1],
          racing: savedCategory[2],
          sports: savedCategory[3],
        },
        price: payload.price,
        rating: payload.rating,
      };
    default:
      return state;
  }
};
