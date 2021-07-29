import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import ProductsReducer from "./reducers/ProductsReducer";

const store = createStore(
  ProductsReducer,
  compose(
    applyMiddleware(thunk),
    typeof window === "object" &&
      typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);

export default store;
