export const filterProducts = (products, filterState) => {
  const { sortBy, category, price, rating } = filterState;

  // filter by price b/w lowest and selected value
  let filteredProducts = products.filter((product) => product.price <= price);

  //   filter by rating higher than selected value
  filteredProducts = filteredProducts.filter(
    (product) => product.rating >= rating
  );

  // sort by filters
  if (sortBy === "LOW_TO_HIGH") {
    filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
  }
  if (sortBy === "HIGH_TO_LOW") {
    filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
  }

  // filter by selected category

  if (Object.values(category).every((checked) => !checked)) {
    return filteredProducts;
  }
  return filteredProducts.filter((product) => category[product.category]);
};
