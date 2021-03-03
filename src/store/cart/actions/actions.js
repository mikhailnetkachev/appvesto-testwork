import TYPES from "../types";

const clear = () => ({ type: TYPES.CLEAR });

const updateItems = (items) => ({
  type: TYPES.UPDATE_ITEMS,
  payload: { items }
});

const actions = {
  clear,
  updateItems
};

export default actions;
