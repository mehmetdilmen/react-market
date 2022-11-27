import React from "react";

import LeftSide from "../layouts/leftSide/LeftSide";
import Content from "../layouts/content/Content";
import RightSide from "../layouts/rightSide/RightSide";

import { Col, Row } from "antd";

import "../assets/styles/_home.scss";

export default function Home() {
  return (
    <Row className="content-bg">
      <Col className="gutter-row" xs={{ span: 24 }} lg={{ span: 5, offset: 0 }}>
        <LeftSide />
      </Col>
      <Col
        className="gutter-row"
        xs={{ span: 24 }}
        lg={{ span: 10, offset: 1 }}
      >
        <Content />
      </Col>
      <Col className="gutter-row" xs={{ span: 24 }} lg={{ span: 8, offset: 0 }}>
        <RightSide />
      </Col>
    </Row>
  );
}
