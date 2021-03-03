import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import cs from "classnames";

import ProductCard from "../../organisms/ProductCard";
import { cartEmitters, productsEmitters } from "../../../store";
import classes from "./styles.module.scss";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(store => store.products); // TODO: add equal function
  const authorization = useSelector(store => store.authorization);

  useEffect(() => {
    dispatch(productsEmitters.loadItems());

    return () => dispatch(productsEmitters.clear());
  }, [dispatch]);

  if (products.loading) {
    return (
      <div className="wrapper mt-48px">Loading ...</div>
    );
  }

  if (products.error) {
    return (
      <div className="wrapper mt-48px">{products.error}</div>
    );
  }

  const filteredItems = products.items.filter((item) => item.category.includes(products.selectedCategory));
  
  return (
    <div className="wrapper mt-48px">
      {products.items.length ? (
        <>
          <div>
            <select
              value={products.selectedCategory}
              onChange={({ target: { value } }) => dispatch(productsEmitters.selectCategory(value))}
            >
              <option value="">All</option>

              {products.categories.map((item) => {
                return (
                  <option key={item} value={item}>{item}</option>
                );
              })}
            </select>
          </div>
          <ul className={cs(classes.list, "m-0px mt-32px p-0px")}>
            {filteredItems.map((item) => {
              const href = `/products/${item.id}`;
              const onAdd = () => { dispatch(cartEmitters.addItem(item)); };
    
              return (
                <li key={item.id} className={classes.item}>
                  <ProductCard
                    discount={item.discount}
                    hasDiscount={authorization.isAuthorized}
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
        </>
      ) : (
        <div>There are no items.</div>
      )}
    </div>
  );
};

export default Products;
