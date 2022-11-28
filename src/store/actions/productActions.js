export const LIST_PRODUCTS = "LIST_PRODUCTS";
export const LIST_PRODUCTS_LOADING = "LIST_PRODUCTS_LOADING";

export function listProduct(product) {
  return {
    type: LIST_PRODUCTS,
    payload: product,
  };
}

export function listProductLoad(isLoading) {
  return {
    type: LIST_PRODUCTS_LOADING,
    payload: isLoading,
  };
}
