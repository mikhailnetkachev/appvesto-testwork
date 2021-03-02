import { DataAPI } from "../../../api";
import actions from "../actions";

const dataAPI = new DataAPI();

const loadItems = () => (dispatch) => {
  dispatch(actions.loadingItems());

  dataAPI.getProducts()
    .then((response) => {
      const items = response;
      const categories = Array.from(new Set(items.map((item) => item.category)));

      dispatch(actions.updateItems(items, categories));
    })
    .catch(() => {
      dispatch(actions.loadingError("Something went wrong!"));
    });
};

const emitters = {
  loadItems,
};

export default emitters;
