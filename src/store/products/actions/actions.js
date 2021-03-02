import TYPES from "../types";

const loadingError = (message) => ({ type: TYPES.LOADING_ERROR, payload: { message }});

const loadingItems = () => ({ type: TYPES.LOADING_ITEMS });

const updateItems = (items) => ({ type: TYPES.UPDATE_ITEMS, payload: { items } })

const actions = {
  loadingError,
  loadingItems,
  updateItems,
};

export default actions;
