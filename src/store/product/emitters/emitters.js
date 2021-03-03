import { DataAPI } from "../../../api";
import actions from "../actions";

const dataAPI = new DataAPI();

const clear = () => (dispatch) => {
  dispatch(actions.clear());
};

const load = ({ id }) => (dispatch, getState) => {
  dispatch(actions.loadingItem());

  dataAPI.getProduct({ id })
    .then((response) => {
      if (response.status === 200) return response.json();

      throw new Error(`The server responded with ${response.status} error!`);
    })
    .then((response) => {
      const item = response;
      dispatch(actions.updateItem(item));
    })
    .catch((error) => {
      dispatch(actions.loadingError(error.message));
    });
};

const emitters = {
  clear,
  load,
};

export default emitters;
