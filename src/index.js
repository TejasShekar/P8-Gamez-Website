import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "./context/product-context";
import { CategoryProvider } from "./context/category-context";
import { FilterProvider } from "./context/filter-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <FilterProvider>
        <ProductProvider>
          <CategoryProvider>
            <App />
          </CategoryProvider>
        </ProductProvider>
      </FilterProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
