import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
const Header = () => {
  return (
    <div>
      <nav className="header">
        <img src={logo} alt="logo" />
        <div className="nav-menu">
          <a href="/order">Orderer</a>
          <a href="/order">Order</a>
          <a href="/review">Order Review</a>
          <a href="/inventory">Manage Inventory</a>
          <a href="/login">Login</a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
