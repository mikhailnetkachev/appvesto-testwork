import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import {
  emitters as authorizationEmitters,
  reducer as authorizationReducer
} from "./authorization";
import {
  emitters as cartEmitters,
  reducer as cartReducer
} from "./cart";
import {
  emitters as productEmitters,
  reducer as productReducer
} from "./product";
import {
  emitters as productsEmitters,
  reducer as productsReducer
} from "./products";

const reducer = combineReducers({
  authorization: authorizationReducer,
  cart: cartReducer,
  product: productReducer,
  products: productsReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export { authorizationEmitters, cartEmitters, productEmitters, productsEmitters };
export default store;
