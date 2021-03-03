import { OrderAPI } from "../../../api";
import actions from "../actions";
import { CartItem, getCountOfItem } from "./utilities";

const orderAPI = new OrderAPI();

const addItem = (product) => (dispatch, getState) => {
  const {
    cart: { items }
  } = getState();
  const count = getCountOfItem(items, product.id);

  if (count > 0) {
    const updatedItems = items.map((item) => {
      if (item.product.id === product.id) {
        item.incrementCount();
      }

      return item;
    });

    dispatch(actions.updateItems(updatedItems));
    return;
  }

  const item = new CartItem({ product });
  const updatedItems = [...items, item];

  dispatch(actions.updateItems(updatedItems));
};

const purchase = () => (dispatch, getState) => {
  const {
    cart: { items }
  } = getState();
  
  if (!items.length) return;

  const products = items.map((item) => item.product); // TODO: add to request count of product

  orderAPI
    .purchase({ products })
    .then((response) => {
      if (response.status === 200) return response.json();

      throw new Error(`The server responded with ${response.status} error`);
    })
    .then(() => {
      dispatch(actions.clear());
    })
    .catch((error = "Something went wrong!") => console.log(error));
};

const clearItems = () => (dispatch) => {
  const updatedItems = [];

  dispatch(actions.updateItems(updatedItems));
};

const deleteItem = (id) => (dispatch, getState) => {
  const {
    cart: { items }
  } = getState();
  const count = getCountOfItem(items, id);

  if (count > 1) {
    const updatedItems = items.map((item) => {
      if (item.product.id === id) {
        item.decrementCount();
      }

      return item;
    });

    dispatch(actions.updateItems(updatedItems));
    return;
  }

  const updatedItems = items.filter((item) => item.product.id !== id);
  dispatch(actions.updateItems(updatedItems));
};

const emitters = {
  addItem,
  clearItems,
  deleteItem,
  purchase,
};

export default emitters;
