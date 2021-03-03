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

  return (
    <div className={cs(classes.container, "wrapper mt-48px")}>
      <CartTable items={cart.items} onAdd={onAdd} onDelete={onDelete} />
      <div className="d-flex jc-flex-end mt-32px">
        <button disabled={!cart.items.length} onClick={() => dispatch(cartEmitters.purchase())}>PURCHASE</button>
      </div>
    </div>
  );
};

export default Product;
