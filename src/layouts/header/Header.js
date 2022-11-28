import React from "react";
import "./../../assets/styles/_headerStyles.scss";
import Cart from "./_partials/Cart";
import Logo from "./_partials/Logo";

function Header() {
  return (
    <div className="header-main">
      <div className="header-inside">
        <Logo />
        <Cart />
      </div>
    </div>
  );
}

export default Header;
