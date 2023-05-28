import React, { useState } from "react";
import { StyledProductCard } from "../styles/styled-components";

const ProductCard = ({ product }) => {
  const [showMenuList, setShowMenuList] = useState(false);
  function handleMenuList() {
    setShowMenuList((prev) => !prev);
  }
  return (
    <StyledProductCard>
      <div className="card-image">
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
        <h3>{product.title}</h3>
        <span className="rating">{product.rating}⭐</span>
        <p>Stock {product.stock}</p>
        <p className="price">
          {product.price}$<span>-{product.discountPercentage}%</span>
        </p>
      </div>
      <div className="card-action">
        <button>Add to Cart</button>
      </div>
    </StyledProductCard>
  );
};

export default ProductCard;
