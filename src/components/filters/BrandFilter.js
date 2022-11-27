//React
import React, { useState } from "react";

//Antd
import { Checkbox, Input } from "antd";

//Services
import ProductService from "./../../services/productService";

//Redux
import { useDispatch } from "react-redux";

//Styles
import "../../assets/styles/_checkboxFilterStyles.scss";

//Stores
import { listProduct } from "../../store/actions/productActions";

function BrandFilter({ data, filterTitle }) {
  const CheckboxGroup = Checkbox.Group;

  const dispatch = useDispatch();

  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);

  const [searchKey, setSearchKey] = useState("");

  const onChange = (list) => {
    setIndeterminate(!!list.length && list.length < data.length);
    setCheckAll(list.length === data.length);

    let productService = new ProductService();
    productService
      .getProductFilterBrand(list)
      .then((result) => dispatch(listProduct(result)));
  };

  const onCheckAllChange = (e) => {
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  const onSearch = (value) => {
    setSearchKey(value.target.value);
  };

  return (
    <div className="filter-area">
      <div className="title">{filterTitle}</div>
      <div className="filter">
        <div className="search-box">
          <Input
            className="search-input"
            placeholder={"Search " + filterTitle}
            onChange={onSearch}
          />
        </div>
        <div className="filter-container">
          <Checkbox
            indeterminate={indeterminate}
            onChange={onCheckAllChange}
            checked={checkAll}
            className="checkbox-item all-item"
          >
            All
          </Checkbox>
          <CheckboxGroup
            className="checkbox-item"
            onChange={onChange}
            options={data.filter((el) =>
              el.toLowerCase().includes(searchKey.toLowerCase())
            )}
          />
        </div>
      </div>
    </div>
  );
}
export default BrandFilter;
