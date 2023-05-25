import React from "react";
import { StyledSidebar } from "../styles/styled-components";

const Sidebar = ({ open, close }) => {
  return (
    <StyledSidebar open={open}>
      <div className="heading">
        <span>Welcome Tridev</span>
        <button onClick={close}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
      <ul>
        <li>
          <a href="/products">
            <i className="fa-solid fa-basket-shopping"></i>
            <span>Products</span>
          </a>
        </li>
        <li>
          <a href="/add-product">
            <i className="fa-sharp fa-solid fa-cart-plus"></i>
            <span>Add Product</span>
          </a>
        </li>
        <li>
          <a href="/my-cart">
            <i
              className="fa-solid fa-cart-shopping items-count"
              data-count={5}
            ></i>
            <span>My Cart</span>
          </a>
        </li>
      </ul>
    </StyledSidebar>
  );
};

export default Sidebar;
