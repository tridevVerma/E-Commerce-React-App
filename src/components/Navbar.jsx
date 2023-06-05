import React, { useState } from "react";
import { StyledNavbar } from "../styles/styled-components";
import { Sidebar } from "./";
import { useCartContext } from "../Provider/Cart";

const Navbar = () => {
  const cart = useCartContext();

  const [showSidebar, setShowSidebar] = useState(false);

  const openSidebar = () => {
    document.querySelector(".overlay").classList.remove("hide");
    setShowSidebar(true);
  };
  const closeSidebar = () => {
    document.querySelector(".overlay").classList.add("hide");
    setShowSidebar(false);
  };
  return (
    <>
      <StyledNavbar>
        <a href="/" className="brand-logo">
          <img
            src={require("../assets/images/shopping-cart.png")}
            alt="brand-icon"
          />
          <span>E-Commerce</span>
        </a>

        <button className="sidebar-toggler" onClick={openSidebar}>
          <i className="fa-solid fa-bars"></i>
        </button>

        <ul>
          <li>
            <a href="/products">Products</a>
          </li>
          <li>
            <a href="/add-product">Add Product</a>
          </li>
          <li>
            <a href="/my-cart">
              <i
                className="fa-solid fa-cart-shopping items-count"
                data-count={cart.products.length}
              ></i>
              <span>My Cart</span>
            </a>
          </li>
        </ul>
      </StyledNavbar>
      <div className="sidebar-container">
        <Sidebar open={showSidebar} close={closeSidebar} />
      </div>
    </>
  );
};

export default Navbar;
