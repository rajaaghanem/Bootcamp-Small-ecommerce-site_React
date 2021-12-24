import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <Link className="link homepage-link" to="/">
        HomePage
      </Link>
      <Link className="link" to="/products">
        <div className="cart-container">
          <p>0</p>
          <i class="fas fa-shopping-cart"></i>
        </div>
      </Link>
    </div>
  );
};
export default Header;
