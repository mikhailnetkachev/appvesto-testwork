import { useDispatch, useSelector } from "react-redux";
import cs from "classnames";

import CartTable from "../../organisms/CartTable";
import { cartEmitters } from "../../../store";
import classes from "./styles.module.scss";

const Product = () => {
  const dispatch = useDispatch();
  const cart = useSelector(store => store.cart);

  const onAdd = (product) => dispatch(cartEmitters.addItem(product));
  const onDelete = (id) => dispatch(cartEmitters.deleteItem(id));

  if (!cart.items.length) {
    return (
      <div className="wrapper mt-32px">There are no items in cart.</div>
    );
  }

  return (
    <div className={cs(classes.container, "wrapper mt-32px")}>
      <div className="mt-32px">
        <CartTable items={cart.items} onAdd={onAdd} onDelete={onDelete} />
      </div>
      <div className="d-flex jc-flex-end mt-32px">
        <button onClick={() => dispatch(cartEmitters.purchase())}>PURCHASE</button>
      </div>
    </div>
  );
};

export default Product;
