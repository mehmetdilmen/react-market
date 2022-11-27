import React, { useState, useEffect } from "react";
import TagFilter from "../../components/filters/TagFilter";
import BrandFilter from "../../components/filters/BrandFilter";

import ProductService from "./../../services/productService";
import SortFilter from "../../components/filters/SortFilter";

function LeftSide() {
  const [brands, setBrands] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    let productService = new ProductService();
    productService.getAllBrands().then((result) => setBrands(result.data));

    productService.getAllTags().then((result) => setTags(result.data));
  }, []);

  return (
    <div>
      <SortFilter />
      <BrandFilter data={brands} filterTitle="Brands" />
      <TagFilter data={tags} filterTitle="Tags" />
    </div>
  );
}

export default LeftSide;
