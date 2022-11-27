import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  TOTAL_PRICE_INCREASE_FROM_CART,
  TOTAL_PRICE_MINUS_FROM_CART,
} from "../actions/cartActions";

import { cartItems, totalPrice } from "../initialValues/cartItems";

const initialState = {
  cartItems: cartItems,
  totalPrice: totalPrice,
};

export default function cartReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_TO_CART:
      let product = state.cartItems.find(
        (c) => c.product.added === payload.added
      );

      if (product) {
        product.quantity = product.quantity + 1;
        return {
          ...state,
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { quantity: 1, product: payload }],
        };
      }

    case REMOVE_FROM_CART:
      let getProduct = state.cartItems.find(
        (c) => c.product.added === payload.added
      );
      let product2 = state.cartItems.find((c) => getProduct.quantity === 1);
      if (product2) {
        return {
          ...state,
          cartItems: state.cartItems.filter(
            (c) => c.product.added !== payload.added
          ),
        };
      } else {
        getProduct.quantity = getProduct.quantity - 1;
        return {
          ...state,
        };
      }
    case TOTAL_PRICE_INCREASE_FROM_CART:
      const totalPrice = state.totalPrice + payload;
      return {
        ...state,
        totalPrice: totalPrice,
      };
    case TOTAL_PRICE_MINUS_FROM_CART:
      const total = state.totalPrice - payload;
      return {
        ...state,
        totalPrice: total,
      };
    default:
      return state;
  }
}
