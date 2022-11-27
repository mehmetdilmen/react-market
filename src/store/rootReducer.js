//tüm stateleri topladığım yer

import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";
import productReducer from "./reducers/productReducer";


const rootReducer = combineReducers({
    cart :cartReducer,
    product: productReducer
})

export default rootReducer;