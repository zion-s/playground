import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  productDetail: selectedProductReducer,
});

export default reducers;
