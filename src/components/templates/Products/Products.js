import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import cs from "classnames";

import ProductCard from "../../organisms/ProductCard";
import { cartEmitters, productsEmitters } from "../../../store";
import classes from "./styles.module.scss";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(store => store.products);

  useEffect(() => {
    dispatch(productsEmitters.loadItems());

    return () => dispatch(productsEmitters.clear());
  }, [dispatch]);

  if (products.loading) {
    return (
      <div className="wrapper">Loading ...</div>
    );
  }

  if (products.error) {
    return (
      <div className="wrapper">{products.error}</div>
    );
  }

  return (
    <div className="wrapper">
      <h3 className="m-0px">Products</h3>

      {products.items.length ? (
        <ul className={cs(classes.list, "m-0px mt-48px p-0px")}>
          {products.items.map((item) => {
            const href = `/products/${item.id}`;
            const onAdd = () => { dispatch(cartEmitters.addItem(item)); };
  
            return (
              <li key={item.id} className={classes.item}>
                <ProductCard
                  discount={item.discount}
                  hasDiscount={false}
                  href={href}
                  image={item.img_url}
                  name={item.name}
                  price={item.price}
                  onAdd={onAdd}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <div>There are no items.</div>
      )}
    </div>
  );
};

export default Products;
