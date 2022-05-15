export const filterProducts = (products, filterState) => {
  const { sortBy, category, price, rating } = filterState;

  let filteredProducts = products.filter((product) => product.price <= price);

  filteredProducts = filteredProducts.filter(
    (product) => product.rating >= rating
  );

  if (sortBy === "LOW_TO_HIGH") {
    filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
  }
  if (sortBy === "HIGH_TO_LOW") {
    filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
  }

  if (Object.values(category).every((checked) => !checked)) {
    return filteredProducts;
  }
  return filteredProducts.filter((product) => category[product.category]);
};
