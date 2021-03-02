import creators from "../creators";
import { CartItem, getCountOfItem } from "./utilities";

const addItem = (product) => (dispatch, getState) => {
  const {
    cart: { items }
  } = getState();
  const count = getCountOfItem(items, product.id);

  if (count > 0) {
    const updatedItems = items.map((item) => {
      if (item.product.id === product.id) {
        const updatedItem = { ...item, count: item.count + 1 };
        return updatedItem;
      }

      return item;
    });

    dispatch(creators.updateItems(updatedItems));
    return;
  }

  const item = new CartItem({ product });
  const updatedItems = [...items, item];

  dispatch(creators.updateItems(updatedItems));
};

const clearItems = () => (dispatch) => {
  const updatedItems = [];

  dispatch(creators.updateItems(updatedItems));
};

const deleteItem = (id) => (dispatch, getState) => {
  const {
    cart: { items }
  } = getState();
  const count = getCountOfItem(items, id);

  if (count > 1) {
    const updatedItems = items.map((item) => {
      if (item.product.id === id) {
        const updatedItem = { ...item, count: item.count - 1 };
        return updatedItem;
      }

      return item;
    });

    dispatch(creators.updateItems(updatedItems));
    return;
  }

  const updatedItems = items.filter((item) => item.product.id !== id);
  dispatch(creators.updateItems(updatedItems));
};

const actions = {
  addItem,
  clearItems,
  deleteItem
};

export default actions;
