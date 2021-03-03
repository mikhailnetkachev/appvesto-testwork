import API from "./_api";

const DataAPI = class extends API {
  getProduct({ id } = {}) {
    return this.request(`/api/products/${id}`)
  }

  getProducts() {
    return this.request(`/api/products`);
  }
};

export default DataAPI;
