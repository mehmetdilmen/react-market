import React from "react";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "antd/dist/reset.css";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

