import TYPES from "../types";

const updateItems = (items) => ({
  type: TYPES.UPDATE_ITEMS,
  payload: { items }
});

const actions = {
  updateItems
};

export default actions;
