//React
import React, { useEffect, useState } from "react";

//Redux
import { useSelector, useDispatch } from "react-redux";

//Antd
import { Button } from "antd";

//Component
import ProductList from "../../components/product/ProductList";

//Services
import ProductService from "./../../services/productService";

//Store
import { listProduct } from "../../store/actions/productActions";

//Styles
import "../../assets/styles/_contentStyles.scss";

function Content() {
  const dispatch = useDispatch();

  const [productsTotalSize, setProductsTotalSize] = useState(0);
  const [selectedTab, setSelectedTab] = useState("mug");

  const productState = useSelector((state) => state?.product?.productItems);

  const onTabChange = (tabName) => {
    setSelectedTab(tabName);
    let productService = new ProductService();
    productService
      .getProductFilterTags(tabName)
      .then((result) => dispatch(listProduct(result)));
  };

  useEffect(() => {
    let productService = new ProductService();
    productService
      .getAllProduct()
      .then((result) =>
        setProductsTotalSize(parseInt(result.data.length / 16))
      );
    productService
      .getProductWithPagination(1)
      .then((result) => dispatch(listProduct(result)));
  }, []);

  return (
    <div className="content-area">
      <div className="title">
        <span className="heading-text">Products</span>
      </div>
      <div className="tabs">
        <Button
          type="primary"
          className={selectedTab == "mug" ? "btn-tab selected" : "btn-tab"}
          onClick={() => onTabChange("mug")}
        >
          mug
        </Button>
        <div className="spacer-tabs"></div>
        <Button
          type="primary"
          className={selectedTab == "shirt" ? "btn-tab selected" : "btn-tab"}
          onClick={() => onTabChange("shirt")}
        >
          shirt
        </Button>
      </div>
      <ProductList
        data={productState}
        size={productsTotalSize}
      />
    </div>
  );
}

export default Content;
