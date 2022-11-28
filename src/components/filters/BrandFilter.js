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
import {
  listProduct,
  listProductLoad,
} from "../../store/actions/productActions";

function BrandFilter({ data, filterTitle }) {
  const dispatch = useDispatch();

  const [checkData, setCheckData] = useState([]);

  const [checkAll, setCheckAll] = useState(false);

  const [searchKey, setSearchKey] = useState("");

  const onChange = (e) => {
    dispatch(listProductLoad(true));

    let reqeustData = [];
    if (e.target.checked) {
      if (checkData.length) {
        checkData.filter((item) => {
          if (item.name !== e.target.value) {
            setCheckData([...checkData, { name: e.target.value }]);
            reqeustData = [...checkData, { name: e.target.value }];
          }
        });
      } else {
        setCheckData([...checkData, { name: e.target.value }]);
        reqeustData = [...checkData, { name: e.target.value }];
      }
    } else {
      const checkFiltered = checkData.filter(
        (item) => item.name !== e.target.value
      );
      reqeustData = checkFiltered;

      setCheckData(checkFiltered);
    }

    let search = "";
    reqeustData.map((item) => {
      search += item.name + "&";
    });

    let productService = new ProductService();
    productService.getProductFilterBrand(search).then((result) => {
      dispatch(listProductLoad(false));
      dispatch(listProduct(result));
    });
  };

  const onCheckAllChange = (e) => {
    dispatch(listProductLoad(true));

    let productService = new ProductService();

    productService.getProductFilterBrand("").then((result) => {
      dispatch(listProductLoad(false));
      dispatch(listProduct(result));
    });

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
            onChange={onCheckAllChange}
            className="checkbox-item all-item"
          >
            All
          </Checkbox>

          {data
            .filter((el) => el.toLowerCase().includes(searchKey.toLowerCase()))
            .map((i, index) =>
              checkAll ? (
                <Checkbox
                  className="checkbox-item all-item"
                  disabled={checkAll}
                  key={index}
                  checked={checkAll}
                >
                  {i}
                </Checkbox>
              ) : (
                <Checkbox
                  className="checkbox-item all-item"
                  onChange={onChange}
                  value={i}
                  key={"normalCheck" + index}
                  id={"normalCheck" + index}
                  defaultChecked={false}
                >
                  {i}
                </Checkbox>
              )
            )}
        </div>
      </div>
    </div>
  );
}
export default BrandFilter;
