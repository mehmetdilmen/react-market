import React from "react";
import { Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

import { useDispatch } from "react-redux";

import "../../assets/styles/_productItemStyles.scss";
import {
  addToCart,
  totalPriceIncreaseFromCart,
} from "../../store/actions/cartActions";

function ProductItem({ data }) {
  const dispatch = useDispatch();

  const onAddToItem = (item) => {
    dispatch(addToCart(item));
    dispatch(totalPriceIncreaseFromCart(item?.price));
  };
  return (
    <div className="product-item">
      <div className="img-area">
        <Avatar shape="square" size={92} icon={<UserOutlined />} />
      </div>
      <div className="item-height">
        <span className="price">₺ {data.price}</span>
        <span className="text">{data.name}</span>
        <span className="text">{data.tags}</span>
      </div>
      <Button
        type="primary"
        className="add-btn"
        onClick={() => onAddToItem(data)}
      >
        Add
      </Button>
    </div>
  );
}

export default ProductItem;
