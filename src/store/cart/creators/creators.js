import TYPES from "../types";

const updateItems = (items) => ({
  type: TYPES.UPDATE_ITEMS,
  payload: { items }
});

const creators = {
  updateItems
};

export default creators;
