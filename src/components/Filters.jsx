export const Filters = ()=>{
    return(
        <aside className="side-nav filters px-1 py-2">
      <div className="filter-header flex-sbw">
        <h3>Filters</h3>
        <button className="btn py-sm px-1 btn-link">Clear All</button>
      </div>
      <section className="my-2 mx-0">
        <h3 className="filter-name mb-1">Price</h3>
        <label className="flex-sbw" htmlFor="price-range">
          <span>500</span>
          <span>5000</span>
        </label>
        <input
          id="price-range"
          className="slider m-0"
          type="range"
          min="500"
          max="5000"
        />
      </section>
      <section className="my-2 mx-0">
        <h3 className="filter-name mb-1">Sort By</h3>
        <ul>
          <li>
            <input id="low-to-high" type="radio" name="sort-by-price" />
            <label htmlFor="low-to-high">Price - Low to High</label>
          </li>
          <li>
            <input id="high-to-low" type="radio" name="sort-by-price" />
            <label htmlFor="high-to-low">Price - High to Low</label>
          </li>
        </ul>
      </section>
      <section className="my-2 mx-0">
        <h3 className="filter-name mb-1">Category</h3>
        <ul>
          <li>
            <input id="action-category" type="checkbox" />
            <label htmlFor="action-category">Action</label>
          </li>
          <li>
            <input id="adventure-category" type="checkbox" />
            <label htmlFor="adventure-category">Adventure</label>
          </li>
          <li>
            <input id="racing-category" type="checkbox" />
            <label htmlFor="racing-category">Racing</label>
          </li>
          <li>
            <input id="sports-category" type="checkbox" />
            <label htmlFor="sports-category">Sports</label>
          </li>
        </ul>
      </section>
      <section className="my-2 mx-0">
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
        />
      </section>
    </aside>
    )
}