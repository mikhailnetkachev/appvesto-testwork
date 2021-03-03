import TYPES from "../types";

const clear = () => ({ type: TYPES.CLEAR });

const loadingError = (message) => ({ type: TYPES.LOADING_ERROR, payload: { message }});

const loadingItems = () => ({ type: TYPES.LOADING_ITEMS });

const selectFilterCategory = (category) => ({ type: TYPES.SELECT_FILTER_CATEGORY, payload: { category } })

const updateItems = (items, categories) => ({ type: TYPES.UPDATE_ITEMS, payload: { items, categories } })

const actions = {
  clear,
  loadingError,
  loadingItems,
  selectFilterCategory,
  updateItems,
};

export default actions;
