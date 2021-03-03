import TYPES from "../types";

const clear = () => ({ type: TYPES.CLEAR });

const loadingError = (message) => ({ type: TYPES.LOADING_ERROR, payload: { message }});

const loadingItem = () => ({ type: TYPES.LOADING_ITEM });

const updateItem = (item) => ({ type: TYPES.UPDATE_ITEM, payload: { item } })

const actions = {
  clear,
  loadingError,
  loadingItem,
  updateItem,
};

export default actions;
