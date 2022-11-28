import React from "react";
import { useSelector } from "react-redux";

import bagLogo from "../../../assets/icons/bag.svg";

import "../../../assets/styles/_headerCartStyles.scss";

function Cart() {
  const totalPriceState = useSelector((state) => state?.cart);

  return (
    <div className="header-cart-container">
      <div className="icon-cart">
        <img src={bagLogo} alt="" />

        <span className="price">₺ {totalPriceState.totalPrice.toFixed(2)}</span>
      </div>
    </div>
  );
}

export default Cart;
