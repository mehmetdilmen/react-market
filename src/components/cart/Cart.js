//React
import React, { useState } from "react";

//Styles
import "../../assets/styles/_cart.scss";

//Antd
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Input, Button, Row, Col, Divider } from "antd";

//Redux
import { useSelector, useDispatch } from "react-redux";

//Stores
import {
  addToCart,
  removeFromCart,
  totalPriceIncreaseFromCart,
  totalPriceMinusFromCart,
} from "../../store/actions/cartActions";

export default function Cart() {
  const dispatch = useDispatch();

  const ButtonGroup = Button.Group;

  const cartState = useSelector((state) => state?.cart?.cartItems);
  const totalPriceState = useSelector((state) => state?.cart);

  const [count, setCount] = useState(0);

  const increase = (item) => {
    setCount(count + 1);
    dispatch(addToCart(item.product));
    dispatch(totalPriceIncreaseFromCart(item?.product?.price));
  };

  const decline = (item) => {
    setCount(count - 1);
    dispatch(removeFromCart(item.product));

    dispatch(totalPriceMinusFromCart(item?.product?.price));
  };

  return (
    <div className="cart-content">
      {cartState?.map((item, index) => (
        <div className="cart-item" key={index}>
          <Row>
            <Col className="gutter-row" xs={{ span: 18 }} sm={{ span: 18 }} md={{ span: 17 }} lg={{ span: 24 }} xl={{span: 15}} xxl={{span: 18}}>
              <div className="product">
                <span className="name">{item.product.name}</span>
                <span className="price">₺ {item.product.price}</span>
              </div>
            </Col>
            <Col className="gutter-row" xs={{ span: 6 }} sm={{ span: 6 }} md={{ span: 7 }}  lg={{ span: 24 }} xl={{span: 8}} xxl={{span: 6}}>
              <div className="counter">
                <ButtonGroup>
                  <Button
                    onClick={() => decline(item)}
                    icon={<MinusOutlined />}
                    className="btn-plus-minus"
                  />
                  <Input
                    value={item.quantity}
                    size="small"
                    className="counter-input"
                  />
                  <Button
                    onClick={() => increase(item)}
                    icon={<PlusOutlined />}
                    className="btn-plus-minus"
                  />
                </ButtonGroup>
              </div>
            </Col>
          </Row>
          <Divider />
        </div>
      ))}

      {cartState?.length !== 0 ? (
        <div className="total-area">
          <div className="total-price">
            <span className="price">
              ₺ {totalPriceState.totalPrice.toFixed(2)}
            </span>
          </div>
        </div>
      ) : (
        <>No item :(</>
      )}
    </div>
  );
}
