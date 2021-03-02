import API from "./_api";

const DataAPI = class extends API {
  getProduct({ id } = {}) {
    return this.request(`/products/${id}`)
  }

  getProducts() {
    return this.request(`/products`);
  }
};

export default DataAPI;
