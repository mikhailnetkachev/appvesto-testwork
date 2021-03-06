import { DataAPI } from "../../../api";
import actions from "../actions";

const dataAPI = new DataAPI();

const clear = () => (dispatch) => {
  dispatch(actions.clear());
};

const loadItems = () => (dispatch) => {
  dispatch(actions.loadingItems());

  dataAPI.getProducts()
    .then((response) => {
      if (response.status === 200) return response.json();

      throw new Error(`The server responded with ${response.status} error!`);
    })
    .then((response) => {
      const items = response;
      const categories = Array.from(new Set(items.map((item) => item.category)));

      dispatch(actions.updateItems(items, categories));
    })
    .catch((error) => {
      dispatch(actions.loadingError(error.message));
    });
};

const selectCategory = (category) => (dispatch) => {
  dispatch(actions.selectFilterCategory(category));
};

const emitters = {
  clear,
  loadItems,
  selectCategory,
};

export default emitters;
