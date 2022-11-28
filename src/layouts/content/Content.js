//React
import React, { useEffect, useState } from "react";

//Redux
import { useSelector, useDispatch } from "react-redux";

//Antd
import { Button, Spin } from "antd";

//Component
import ProductList from "../../components/product/ProductList";

//Services
import ProductService from "./../../services/productService";

//Store
import {
  listProduct,
  listProductLoad,
} from "../../store/actions/productActions";

//Styles
import "../../assets/styles/_contentStyles.scss";

function Content() {
  const dispatch = useDispatch();

  const [productsTotalSize, setProductsTotalSize] = useState(0);
  const [selectedTab, setSelectedTab] = useState(null);

  const productState = useSelector((state) => state?.product?.productItems);
  const productLoadingState = useSelector(
    (state) => state?.product.productLoading
  );

  const onTabChange = (tabName) => {
    setSelectedTab(tabName);
    let productService = new ProductService();
    if (tabName === "clear") {
      setSelectedTab(null);
    }
    productService.getProductFilterTags(tabName).then((result) => {
      dispatch(listProduct(result));
      dispatch(listProductLoad(false));
    });
  };

  useEffect(() => {
    dispatch(listProductLoad(true));

    let productService = new ProductService();
    productService
      .getAllProduct()
      .then((result) =>
        setProductsTotalSize(parseInt(result.data.length / 16))
      );
    productService.getProductWithPagination(1).then((result) => {
      dispatch(listProductLoad(false));
      dispatch(listProduct(result));
    });
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
        {selectedTab !== null ? (
          <>
            <div className="spacer-tabs"></div>
            <Button
              type="primary"
              className={
                selectedTab == "clear" ? "btn-tab selected" : "btn-tab"
              }
              onClick={() => onTabChange("clear")}
            >
              clear
            </Button>
          </>
        ) : (
          <></>
        )}
      </div>
      <Spin tip="Loading..." spinning={productLoadingState}>
        <ProductList data={productState} size={productsTotalSize} />
      </Spin>
    </div>
  );
}

export default Content;
