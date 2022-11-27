//React
import React, { useState } from "react";

//Andt
import { Radio, Space } from "antd";

//Redux
import { useDispatch } from "react-redux";

//Sttyles
import "../../assets/styles/_sortFilterStyles.scss";

//Store
import { listProduct } from "../../store/actions/productActions";

//Service
import ProductService from "./../../services/productService";

function SortFilter() {
  const dispatch = useDispatch();

  const [value, setValue] = useState(1);

  const onChange = (e) => {
    setValue(e.target.value);

    let productService = new ProductService();

    if (e.target.values.sort === "date") {
      productService
        .getProductSortNewOld(e.target.values.type)
        .then((result) => dispatch(listProduct(result)));
    } else {
      productService
        .getProductSortPrice(e.target.values.type)
        .then((result) => dispatch(listProduct(result)));
    }
  };

  return (
    <div className="sort-area">
      <div className="title">Sorting</div>
      <div className="filter">
        <div className="sort-container">
          <Radio.Group onChange={onChange} value={value}>
            <Space direction="vertical">
              <Radio value={1} values={{ type: "desc", sort: "price" }}>
                Price low to high
              </Radio>
              <Radio value={2} values={{ type: "asc", sort: "price" }}>
                Price high to low
              </Radio>
              <Radio value={3} values={{ type: "desc", sort: "date" }}>New to old</Radio>
              <Radio value={4} values={{ type: "asc", sort: "date" }}>Old to new</Radio>
            </Space>
          </Radio.Group>
        </div>
      </div>
    </div>
  );
}
export default SortFilter;
