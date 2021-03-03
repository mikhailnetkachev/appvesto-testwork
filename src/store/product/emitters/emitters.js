import { DataAPI } from "../../../api";
import actions from "../actions";

const dataAPI = new DataAPI();

const clear = () => (dispatch) => {
  dispatch(actions.clear());
};

const load = ({ id }) => (dispatch) => {
  dispatch(actions.loadingItem());

  dataAPI.getProduct({ id })
    .then((response) => {
      const item = response;
      dispatch(actions.updateItem(item));
    })
    .catch(() => {
      dispatch(actions.loadingError("Something went wrong!"));
    });
};

const emitters = {
  clear,
  load,
};

export default emitters;
