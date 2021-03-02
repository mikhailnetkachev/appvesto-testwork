import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import {
  actions as cartActions,
  reducer as cartReducer
} from "./cart";

const reducer = combineReducers({
  cart: cartReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export { cartActions };
export default store;
