import TYPES from "../types";

const initialState = {
  error: "",
  isAuthorized: false,
  loading: "",
  user: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.ERROR:
      return { ...state, error: action.payload.message, loading: false };
    case TYPES.LOADING:
        return { ...state, error: "", loading: true };
    case TYPES.SIGN_IN:
      return { ...state, isAuthorized: true, user: action.payload.user };
    case TYPES.SIGN_OUT:
      return { ...state, isAuthorized: false, user: null };
    default:
      return state;
  }
};

export default reducer;
