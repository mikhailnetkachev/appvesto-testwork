import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import cs from "classnames";

import CartTable from "../CartTable";
import { cartEmitters } from "../../../store";
import classes from "./styles.module.scss";

const CartPopover = () => { // TODO: replace with Portal
  const [isOpened, setIsOpened] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const cart = useSelector(store => store.cart);

  const onAdd = (product) => dispatch(cartEmitters.addItem(product));
  const onDelete = (id) => dispatch(cartEmitters.deleteItem(id));
  
  const close = () => setIsOpened(false);
  const toggle = () => setIsOpened((state) => !state);
  
  const goToCart = () => {
    close();
    history.push("/cart");
  };

  return (
    <div className={classes.container}>
      <button className="d-flex jc-center ai-center" onClick={toggle}>
        <svg className={classes.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M509.867 89.6c-2.133-2.133-4.267-4.267-8.533-4.267H96L85.333 29.867c0-4.267-6.4-8.533-10.667-8.533h-64C4.267 21.333 0 25.6 0 32s4.267 10.667 10.667 10.667h55.467l51.2 260.267c6.4 34.133 38.4 59.733 72.533 59.733H435.2c6.4 0 10.667-4.267 10.667-10.667 0-6.4-4.267-10.667-10.667-10.667H192c-17.067 0-34.133-8.533-42.667-23.467L460.8 275.2c4.267 0 8.533-4.267 8.533-8.533L512 96s0-4.267-2.133-6.4zM450.133 256l-311.467 40.533-38.4-192H486.4L450.133 256zM181.333 384C151.467 384 128 407.467 128 437.333c0 29.867 23.467 53.333 53.333 53.333 29.867 0 53.333-23.467 53.333-53.333C234.667 407.467 211.2 384 181.333 384zm0 85.333c-17.067 0-32-14.934-32-32s14.933-32 32-32 32 14.934 32 32-14.933 32-32 32zM394.667 384c-29.867 0-53.333 23.467-53.333 53.333 0 29.867 23.467 53.333 53.333 53.333 29.867 0 53.333-23.467 53.333-53.333S424.533 384 394.667 384zm0 85.333c-17.067 0-32-14.934-32-32s14.933-32 32-32 32 14.934 32 32-14.934 32-32 32z"/></svg>
      </button>
      {isOpened && (
        <div className={cs(classes.body, "mt-8px p-8px pt-16px pb-16px")}>
          <CartTable items={cart.items} onAdd={onAdd} onDelete={onDelete} />
          <hr />
          <div className="d-flex jc-flex-end">
            <button onClick={goToCart}>Make an order</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPopover;
