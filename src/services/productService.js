import axios from "axios";

export default class ProductService {
  getProducts() {
    return axios.get("http://localhost:3000/apis/companies");
  }

  getByProductName(productName) {
    return axios.get(
      "http://localhost:8080/api/products/getByProductName?productName=" +
        productName
    );
  }

  getAllProduct() {
    return axios.get(`http://localhost:3000/items`);
  }

  getProductWithPagination(pageNumber) {
    return axios.get(
      `http://localhost:3000/items?_page=${pageNumber}&_limit=16`
    );
  }

  getProductFilterBrand(brandName) {
    return axios.get(`http://localhost:3000/items?q=${brandName}&attr=manufacturer&_page=1&_limit=16`);
  }

  getProductSortNewOld(addedTime) {
    return axios.get(`http://localhost:3000/items?_sort=added=${addedTime}&_page=1&_limit=16`);
  }

  getProductSortPrice(priceType) {
    return axios.get(`http://localhost:3000/items?_sort=price&_order=${priceType}&_page=1&_limit=16`);
  }

  getProductFilterTags(tagName) {
    return axios.get(`http://localhost:3000/items?q=${tagName}&attr=tags&_page=1&_limit=16`);
  }

  getAllBrands() {
    return axios.get("http://localhost:3000/brands");
  }

  getAllTags() {
    return axios.get("http://localhost:3000/tags");
  }

  //Fulltext search with name
  getSearchBrandName(searchParam) {
    return axios.get(`http://localhost:3000/brands?q=${searchParam}`);
  }
}
