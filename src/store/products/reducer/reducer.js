import TYPES from "../types";

const initialState = {
  categories: [],
  error: "",
  items: [],
  loading: true,
  selectedCategory: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.CLEAR:
      return initialState;
    case TYPES.LOADING_ERROR:
      return { ...state, error: action.payload.message, loading: false };
    case TYPES.LOADING_ITEMS:
      return { ...state, error: "", loading: true };
    case TYPES.SELECT_FILTER_CATEGORY:
      return { ...state, selectedCategory: action.payload.category };
    case TYPES.UPDATE_ITEMS:
      return { ...state, categories: action.payload.categories, error: "", items: action.payload.items, loading: false };
    default:
      return state;
  }
};

export default reducer;
