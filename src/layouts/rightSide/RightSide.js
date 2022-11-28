import React from "react";
import Cart from "../../components/cart/Cart";

import { Col, Row } from "antd";

export default function RightSide() {
  return (
    <Row>
      <Col className="gutter-row" xs={{ span: 24, offset: 0 }} lg={{ span: 24, offset: 0 }}>
        <Cart />
      </Col>
    </Row>
  );
}
