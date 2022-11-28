//React
import React, { useState } from "react";

//Components
import ProductItem from "./ProductItem";

//Antd
import { Pagination, Col, Row } from "antd";

//Services
import ProductService from "./../../services/productService";

//Redux
import { useDispatch } from "react-redux";

//Store
import {
  listProduct,
  listProductLoad,
} from "../../store/actions/productActions";

//Styles
import "../../assets/styles/_productListStyles.scss";

function ProductList({ data, size }) {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  const onChange = (page) => {
    let productService = new ProductService();
    dispatch(listProductLoad(true));
    productService.getProductWithPagination(page).then((result) => {
      dispatch(listProductLoad(false));
      dispatch(listProduct(result));
    });

    setCurrentPage(page);
  };

  return (
    <Row className="product-area" gutter={{ xs: 12, sm: 12, md: 24, lg: 24 }}>
      {data &&
        data?.map((item, index) => (
          <Col
            className="gutter-row"
            xs={{ span: 12 }}
            lg={{ span: 6 }}
            key={index}
          >
            <ProductItem data={item} />
          </Col>
        ))}

      {size > 0 ? (
        <Pagination
          defaultCurrent={16}
          current={currentPage}
          total={size}
          showSizeChanger={false}
          showQuickJumper={false}
          onChange={onChange}
        />
      ) : (
        <></>
      )}
    </Row>
  );
}
export default ProductList;
