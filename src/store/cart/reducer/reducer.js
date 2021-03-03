import TYPES from "../types";

const initialState = {
  items: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.CLEAR:
      return initialState;
    case TYPES.UPDATE_ITEMS:
      return { ...state, items: action.payload.items };
    default:
      return state;
  }
};

export default reducer;
