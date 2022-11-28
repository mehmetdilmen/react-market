import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Row, Col } from "antd";

import { Provider } from "react-redux";
import { configureStore } from "./store/configureStore";

import Header from "./layouts/header/Header";
import Footer from "./layouts/footer/Footer";


const store = configureStore();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Row justify="center">
        <Col span={24}>
          <Header />
        </Col>
        <Col span={24} className="content">
          <App />
        </Col>
        <Col span={24}>
          <Footer />
        </Col>
      </Row>
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
