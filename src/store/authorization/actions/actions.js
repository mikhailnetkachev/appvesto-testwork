import TYPES from "../types";

const error = (message) => ({ type: TYPES.ERROR, payload: { message }});

const loading = () => ({ type: TYPES.LOADING });

const signIn = (user) => ({ type: TYPES.SIGN_IN, payload: { user } });

const signOut = () => ({ type: TYPES.SIGN_OUT });

const actions = {
  error,
  loading,
  signIn,
  signOut,
};

export default actions;
