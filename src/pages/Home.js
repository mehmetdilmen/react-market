import React from "react";

import LeftSide from "../layouts/leftSide/LeftSide";
import Content from "../layouts/content/Content";
import RightSide from "../layouts/rightSide/RightSide";

import { Col, Row } from "antd";

import "../assets/styles/_home.scss";

export default function Home() {
  return (
    <Row className="content-bg" gutter={{ xs: 0, lg: 24 }}>
      <Col xs={{ span: 24 }} lg={{ span: 5 }}>
        <LeftSide />
      </Col>
      <Col xs={{ span: 24 }} lg={{ span: 13 }}>
        <Content />
      </Col>
      <Col xs={{ span: 24 }} lg={{ span: 6 }}>
        <RightSide />
      </Col>
    </Row>
  );
}
