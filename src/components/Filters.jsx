import { useFilter } from "../context/filter-context";

export const Filters = () => {
  const { filterState, filterDispatch } = useFilter();
  const { price, sortBy, category, rating } = filterState;
  const { action, adventure, racing, sports } = category;

  const sortByHandler = (e) => {
    filterDispatch({
      type: "SORT",
      payload: e.target.value,
    });
  };

  const categoryHandler = (e) => {
    filterDispatch({
      type: "CATEGORY",
      payload: e.target.value,
    });
  };

  const priceHandler = (e) => {
    filterDispatch({
      type: "PRICE",
      payload: e.target.value,
    });
  };

  const ratingHandler = (e) => {
    filterDispatch({
      type: "RATING",
      payload: e.target.value,
    });
  };

  return (
    <aside className="side-nav filters px-1 pt-1">
      <div className="filter-header flex-sbw">
        <h3>Filters</h3>
        <button
          className="btn py-sm px-1 btn-link"
          onClick={() => filterDispatch({ type: "CLEAR_FILTERS" })}
        >
          Clear All
        </button>
      </div>

      {/* Sort By Price Filters */}
      <section className="my-1 mx-0">
        <h3 className="filter-name mb-1">Sort By</h3>
        <ul>
          <li>
            <input
              id="low-to-high"
              type="radio"
              name="sort-by-price"
              value="LOW_TO_HIGH"
              checked={sortBy === "LOW_TO_HIGH"}
              onChange={sortByHandler}
            />
            <label htmlFor="low-to-high">Price - Low to High</label>
          </li>
          <li>
            <input
              id="high-to-low"
              type="radio"
              name="sort-by-price"
              value="HIGH_TO_LOW"
              checked={sortBy === "HIGH_TO_LOW"}
              onChange={sortByHandler}
            />
            <label htmlFor="high-to-low">Price - High to Low</label>
          </li>
        </ul>
      </section>

      {/* Filter by Category */}
      <section className="my-1 mx-0">
        <h3 className="filter-name mb-1">Category</h3>
        <ul>
          <li>
            <input
              id="action-category"
              type="checkbox"
              checked={action}
              value="action"
              onChange={categoryHandler}
            />
            <label htmlFor="action-category">Action</label>
          </li>
          <li>
            <input
              id="adventure-category"
              type="checkbox"
              checked={adventure}
              value="adventure"
              onChange={categoryHandler}
            />
            <label htmlFor="adventure-category">Adventure</label>
          </li>
          <li>
            <input
              id="racing-category"
              type="checkbox"
              checked={racing}
              value="racing"
              onChange={categoryHandler}
            />
            <label htmlFor="racing-category">Racing</label>
          </li>
          <li>
            <input
              id="sports-category"
              type="checkbox"
              checked={sports}
              value="sports"
              onChange={categoryHandler}
            />
            <label htmlFor="sports-category">Sports</label>
          </li>
        </ul>
      </section>

      {/* Filter by price range */}
      <section className="my-1 mx-0">
        <h3 className="filter-name mb-1">Price</h3>
        <label className="flex-sbw" htmlFor="price-range">
          <span>500</span>
          <span>{price}</span>
        </label>
        <input
          id="price-range"
          className="slider m-0"
          type="range"
          step="100"
          min="500"
          max="4500"
          value={price}
          onChange={priceHandler}
        />
      </section>

      {/* Filter by rating */}
      <section className="my-1 mx-0">
        <h3 className="filter-name mb-1">Rating</h3>
        <label className="flex-sbw" htmlFor="rating">
          <span>0</span>
          <span>5</span>
        </label>
        <input
          id="rating"
          className="slider m-0"
          type="range"
          min="0"
          max="5"
          value={rating}
          onChange={ratingHandler}
        />
      </section>
    </aside>
  );
};
