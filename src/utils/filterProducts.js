export const filterProducts = (products, filterState) => {
  const { sortBy, category, price, rating } = filterState;

  // filter product by price less than selected value
  let filteredProducts = products.filter((product) => product.price <= price);

  //   filter by rating higher than selected value
  filteredProducts = filteredProducts.filter(
    (product) => product.rating >= rating
  );

  // sort-by-price filters
  if (sortBy === "LOW_TO_HIGH") {
    filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
  }
  if (sortBy === "HIGH_TO_LOW") {
    filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
  }

  // filter by selected category

  //The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
  // Here, if all array elements return true, it means that all categories are in false/default state.
  // Used this approach to prevent no render as none of the categories are selected by default.

  if (Object.values(category).every((checked) => !checked)) {
    return filteredProducts;
  }
  return filteredProducts.filter((product) => category[product.category]);
};
