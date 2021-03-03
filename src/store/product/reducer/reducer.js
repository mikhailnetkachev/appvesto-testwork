import TYPES from "../types";

const initialState = {
  error: "",
  loading: true,
  item: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.CLEAR:
      return initialState;
    case TYPES.LOADING_ERROR:
      return { ...state, error: action.payload.message, loading: false };
    case TYPES.LOADING_ITEM:
      return { ...state, error: "", loading: true };
    case TYPES.UPDATE_ITEM:
      return { ...state, error: "", item: action.payload.item, loading: false };
    default:
      return state;
  }
};

export default reducer;
