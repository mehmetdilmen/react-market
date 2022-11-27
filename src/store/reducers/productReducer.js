import { LIST_PRODUCTS } from "../actions/productActions";
import { productItems } from "../initialValues/productItems";

const initialState = {
  productItems: productItems,
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
    default:
      return state;
  }
}
