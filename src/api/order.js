import API from "./_api";

const OrderAPI = class extends API {
  purchase({ products } = {}) {
    return this.request(`/api/purchase`, {
      body: { products },
      method: "POST",
    });
  }
};

export default OrderAPI;
