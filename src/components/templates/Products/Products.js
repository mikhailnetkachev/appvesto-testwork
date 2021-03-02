import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { productsEmitters } from "../../../store";

const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(store => store);

  useEffect(() => {
    dispatch(productsEmitters.loadItems());
  }, [dispatch]);

  if (products.loading) {
    return (
      <div>Loading ...</div>
    );
  }

  if (products.error) {
    return (
      <div>{products.error}</div>
    );
  }

  if (!products.items.length) {
    return (
      <div>There are no items.</div>
    );
  }

  return (
    <div>
      <h3>Products</h3>
      <ul>
        {products.items.map((item) => (
          <li key={item.id}>
            <strong>{item.name}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
