import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import cs from "classnames";

import CartTable from "../CartTable";
import { cartEmitters } from "../../../store";
import classes from "./styles.module.scss";

const CartPopover = () => {
  const [isOpened, setIsOpened] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector(store => store.cart);

  const onAdd = (product) => dispatch(cartEmitters.addItem(product));
  const onDelete = (id) => dispatch(cartEmitters.deleteItem(id));
  
  const toggle = () => setIsOpened((state) => !state);

  return (
    <div className={classes.container}>
      <button onClick={toggle}>CartPopover</button>
      {isOpened && (
        <div className={cs(classes.body, "mt-8px p-8px pt-16px pb-16px")}>
          <CartTable items={cart.items} onAdd={onAdd} onDelete={onDelete} />
          <hr />
          <div className="d-flex jc-flex-end">
            <Link to="/cart">Make an order</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPopover;
