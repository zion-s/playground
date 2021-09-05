//import axios from "axios";
import FakeDealApi from "../../../apis/FakeDealApi";
import { ActionTypes } from "../constants/actionTypes";

// export const fetchProducts = async () => {
//   const response = await axios.get("/products");
//   return {
//     type: ActionTypes.FETCH_PRODUCTS,
//     payload: response,
//   };
// };
// Above will give an error( Error: Actions must be plain objects. Use custom middleware for async actions.)
// So we use redux-thunk as below, after modifying the store

export const fetchProducts = () => {
  return async function (dispatch, getState) {
    const response = await FakeDealApi.get("/products");
    dispatch({
      type: ActionTypes.FETCH_PRODUCTS,
      payload: response.data,
    });
  };
};
export const fetchProduct = (id) => async (dispatch, getState) => {
  const response = await FakeDealApi.get(`/products/${id}`);
  dispatch({
    type: ActionTypes.SELECTED_PRODUCT,
    payload: response.data,
  });
};

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProducts = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProducts = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
