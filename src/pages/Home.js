import React from "react";

import LeftSide from "../layouts/leftSide/LeftSide";
import Content from "../layouts/content/Content";
import RightSide from "../layouts/rightSide/RightSide";

import { Col, Row } from "antd";

import "../assets/styles/_home.scss";

export default function Home() {
  return (
    <Row gutter={16}>
      <Col xs={{ span: 24 }} lg={{ span: 6 }}>
        <LeftSide />
      </Col>
      <Col xs={{ span: 24 }} lg={{ span: 12 }}>
        <Content />
      </Col>
      <Col xs={{ span: 24 }} lg={{ span: 6 }}>
        <RightSide />
      </Col>
    </Row>
  );
}
