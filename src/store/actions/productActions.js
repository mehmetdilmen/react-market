export const LIST_PRODUCTS = "LIST_PRODUCTS";

export function listProduct(product) {
  return {
    type: LIST_PRODUCTS,
    payload: product,
  };
}
