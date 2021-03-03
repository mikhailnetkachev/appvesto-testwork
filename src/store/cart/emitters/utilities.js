const CartItem = class {
  constructor({ product = null, count = 1 }) {
    this.product = product;
    this.count = count;
  }

  decrementCount() {
    if (this.count > 1) {
      this.count -= 1;
    } 
  }

  incrementCount() {
    this.count += 1;
  }
};

const getCountOfItem = (items, id) => {
  const item = items.find((item) => item.product.id === id);

  if (item) return item.count;

  return 0;
};

export { CartItem, getCountOfItem };
