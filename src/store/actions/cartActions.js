export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const TOTAL_PRICE_INCREASE_FROM_CART = "TOTAL_PRICE_INCREASE_FROM_CART";
export const TOTAL_PRICE_MINUS_FROM_CART = "TOTAL_PRICE_MINUS_FROM_CART";

export function addToCart(product) {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
}

export function removeFromCart(product) {
  return {
    type: REMOVE_FROM_CART,
    payload: product,
  };
}

export function totalPriceIncreaseFromCart(price) {
  return {
    type: TOTAL_PRICE_INCREASE_FROM_CART,
    payload: price,
  };
}

export function totalPriceMinusFromCart(price) {
  return {
    type: TOTAL_PRICE_MINUS_FROM_CART,
    payload: price,
  };
}
