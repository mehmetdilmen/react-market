import {
  LIST_PRODUCTS,
  LIST_PRODUCTS_LOADING,
} from "../actions/productActions";
import { productItems, productLoading } from "../initialValues/productItems";

const initialState = {
  productItems: productItems,
  productLoading: productLoading,
};

export default function productReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case LIST_PRODUCTS:
      return {
        ...state,
        productItems: payload?.data,
      };
    case LIST_PRODUCTS_LOADING:
      return {
        ...state,
        productLoading: payload,
      };
    default:
      return state;
  }
}
