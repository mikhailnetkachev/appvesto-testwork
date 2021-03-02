import TYPES from "../types";

const initialState = {
  categories: [],
  error: "",
  loading: true,
  items: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.LOADING_ERROR:
      return { ...state, error: action.payload.message, loading: false };
    case TYPES.LOADING_ITEMS:
      return { ...state, error: "", loading: true };
    case TYPES.UPDATE_ITEMS:
      return { ...state, categories: action.payload.categories, error: "", items: action.payload.items, loading: false };
    default:
      return state;
  }
};

export default reducer;
