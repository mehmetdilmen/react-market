//React
import React, { useState } from "react";

//Redux
import { useDispatch } from "react-redux";

//Antd
import { Checkbox, Input } from "antd";

//Store
import {
  listProduct,
  listProductLoad,
} from "../../store/actions/productActions";

//Service
import ProductService from "./../../services/productService";

//Styles
import "../../assets/styles/_checkboxFilterStyles.scss";

function TagFilter({ data, filterTitle }) {
  const CheckboxGroup = Checkbox.Group;

  //Dispatch
  const dispatch = useDispatch();

  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);

  const [searchKey, setSearchKey] = useState("");

  const onChange = (list) => {
    //setCheckedList(list);
    dispatch(listProductLoad(true));

    setIndeterminate(!!list.length && list.length < data.length);
    setCheckAll(list.length === data.length);

    let search = "";
    for (const element of list) {
      search += element + "&";
    }

    let productService = new ProductService();
    productService.getProductFilterTags(search).then((result) => {
      dispatch(listProductLoad(false));
      dispatch(listProduct(result));
    });
  };

  const onCheckAllChange = (e) => {
    //setCheckedList(e.target.checked ? data : []);
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
          {/* <Checkbox
            indeterminate={indeterminate}
            onChange={onCheckAllChange}
            checked={checkAll}
            className="checkbox-item all-item"
          >
            All
          </Checkbox> */}
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
export default TagFilter;
