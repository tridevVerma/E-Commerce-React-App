import React, { useState, useEffect } from "react";
import { API_ROOT } from "../utils/constants";
import { Loader, ProductCard } from "../components";
import { StyledAllProducts } from "../styles/styled-pages";
import axios from "axios";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const products = await axios.get(API_ROOT);
        setProducts(products.data);
      } catch (err) {
        console.log(err.message);
      }
      setLoading(false);
    }
    fetchProducts();
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <StyledAllProducts className="products-container">
      {products.map((product) => {
        return <ProductCard product={product} key={product.id} />;
      })}
    </StyledAllProducts>
  );
};

export default AllProducts;
