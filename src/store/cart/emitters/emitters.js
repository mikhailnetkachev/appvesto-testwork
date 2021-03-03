import actions from "../actions";
import { CartItem, getCountOfItem } from "./utilities";

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
  deleteItem
};

export default emitters;
