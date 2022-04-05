export const filterProducts = (products, filterState) => {
  const { sortBy, category, price, rating } = filterState;
  let filteredProducts = [...products];

  // filter by price b/w lowest and selected value
  filteredProducts = products.filter((product) => product.price <= price);

  //   filter by rating higher than selected value
  filteredProducts = filteredProducts.filter(
    (product) => product.rating >= rating
  );

  // sort by filters
  if (sortBy === "LOW_TO_HIGH") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  }
  if (sortBy === "HIGH_TO_LOW") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  }

  // filter by selected category
  let finalProducts = filteredProducts.filter(
    (product) => category[product.category]
  );

  //   conditional return of final array of products to be rendered.
  if (finalProducts.length === 0) {
    return filteredProducts;
  } else {
    return finalProducts;
  }
};
