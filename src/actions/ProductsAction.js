import {
  SELECT_PRODUCT,
  SELECT_CATEGORY,
  CLEAR_STATE,
  ADD_PRODUCT_TO_CART,
  MODIFY_CART_PRODUCT,
  CLEAN_CART,
} from "../types/index";
import AxiosClient from "../config/axios";

export function selectProductAction(name) {
  return async (dispatch) => {
    const products = await AxiosClient.get();
    const selected = products.data.products.filter(
      (product) => product.slug === name
    );
    dispatch(selectProduct(selected[0]));
  };
}

const selectProduct = (product) => ({
  type: SELECT_PRODUCT,
  payload: product,
});

export function selectCategoryAction(category) {
  return async (dispatch) => {
    const categories = await AxiosClient.get();
    const selected = categories.data.products.filter(
      (product) => product.category === category
    );
    dispatch(selectCategory(selected));
  };
}

const selectCategory = (category) => ({
  type: SELECT_CATEGORY,
  payload: category,
});

export function clearStateAction() {
  return (dispatch) => {
    dispatch(clearState());
  };
}

const clearState = () => ({
  type: CLEAR_STATE,
});

export function addProductToCartAction(product) {
  return (dispatch) => {
    dispatch(addProductToCart(product));
  };
}

const addProductToCart = (product) => ({
  type: ADD_PRODUCT_TO_CART,
  payload: product,
});

export function modifyCartProductAction(product) {
  return (dispatch) => {
    dispatch(modifyCartProduct(product));
  };
}

const modifyCartProduct = (product) => ({
  type: MODIFY_CART_PRODUCT,
  payload: product,
});

export function cleanCartAction() {
  return (dispatch) => {
    dispatch(cleanCart());
  };
}

const cleanCart = () => ({
  type: CLEAN_CART,
});
