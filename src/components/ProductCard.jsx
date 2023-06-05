import React, { useState } from "react";
import { StyledProductCard } from "../styles/styled-components";
import { Link } from "react-router-dom";
import { useCartContext } from "../Provider/Cart";

const ProductCard = ({ product }) => {
  const cart = useCartContext();
  const [showMenuList, setShowMenuList] = useState(false);
  function handleMenuList() {
    setShowMenuList((prev) => !prev);
  }

  function showDetails() {}
  return (
    <StyledProductCard>
      <div className="card-image" onClick={showDetails}>
        <img src={product.thumbnail} alt="product" />
        <button onClick={handleMenuList}>
          <i className="fa-solid fa-ellipsis"></i>
        </button>
        <div className={`menu-list ${showMenuList ? "show" : ""}`}>
          <ul>
            <li>
              <button>
                <i className="fa-solid fa-pen-to-square"></i>
                <span>Edit Product</span>
              </button>
            </li>
            <li>
              <button>
                <i className="fa-solid fa-trash"></i>
                <span>Delete Product</span>
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="card-description">
        <div className="header">
          <h3>{product.title}</h3>
          {cart.checkProductExists(product.id) ? (
            <button onClick={() => cart.remove(product.id)}>
              <i className="fa-solid fa-cart-plus"></i>
              <span>Remove</span>
            </button>
          ) : (
            <button onClick={() => cart.add(product)}>
              <i className="fa-solid fa-cart-plus"></i>
              <span>Add</span>
            </button>
          )}
        </div>
        <span className="rating">{product.rating}⭐</span>
        <p>Stock {product.stock}</p>
        <p className="price">
          {product.price}$<span>-{product.discountPercentage}%</span>
        </p>
      </div>
      <div className="card-action">
        <Link to={`/product/${product.id}`}>Show Details</Link>
      </div>
    </StyledProductCard>
  );
};

export default ProductCard;
