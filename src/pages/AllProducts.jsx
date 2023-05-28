import React, { useState, useEffect } from "react";
import { API_ROOT } from "../utils/constants";
import { ProductCard } from "../components";
import { StyledAllProducts } from "../styles/styled-pages";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(API_ROOT);
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <StyledAllProducts className="products-container">
      {products.map((product) => {
        return <ProductCard product={product} key={product.id} />;
      })}
    </StyledAllProducts>
  );
};

export default AllProducts;
