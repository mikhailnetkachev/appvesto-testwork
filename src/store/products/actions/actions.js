import TYPES from "../types";

const clear = () => ({ type: TYPES.CLEAR });

const loadingError = (message) => ({ type: TYPES.LOADING_ERROR, payload: { message }});

const loadingItems = () => ({ type: TYPES.LOADING_ITEMS });

const updateItems = (items, categories) => ({ type: TYPES.UPDATE_ITEMS, payload: { items, categories } })

const actions = {
  clear,
  loadingError,
  loadingItems,
  updateItems,
};

export default actions;
