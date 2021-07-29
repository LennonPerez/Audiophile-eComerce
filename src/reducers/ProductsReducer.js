import {
  GET_ALL_PRODUCTS,
  SELECT_PRODUCT,
  SELECT_CATEGORY,
  CLEAR_STATE,
  ADD_PRODUCT_TO_CART,
  MODIFY_CART_PRODUCT,
  CLEAN_CART,
} from "../types/index";

const initialState = {
  products: [],
  selectedproduct: null,
  selectedcategory: null,
  cart: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case SELECT_PRODUCT:
      return {
        ...state,
        selectedproduct: state.products.filter(
          (product) => product.slug === action.payload
        ),
      };
    case SELECT_CATEGORY:
      return {
        ...state,
        selectedcategory: state.products
          .filter((product) => product.category === action.payload)
          .reverse(),
      };
    case CLEAR_STATE:
      return {
        ...state,
        selectedproduct: null,
        selectedcategory: null,
      };
    case ADD_PRODUCT_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case MODIFY_CART_PRODUCT:
      return {
        ...state,
        cart: [
          ...state.cart.filter((car) => car.id !== action.payload.id),
          action.payload,
        ],
      };
    case CLEAN_CART:
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
}
