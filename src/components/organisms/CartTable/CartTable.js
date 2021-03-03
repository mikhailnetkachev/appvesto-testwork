import cs from "classnames";

import classes from "./styles.module.scss";

const CartTable = ({ items, onAdd, onDelete }) => (
  <ul className={cs(classes.container, "m-0px p-0px")}>
    {items.map((item) => {
      return (
        <li key={item.product.id} className={cs(classes.item, "d-flex ai-center p-4px")}>
          <h3 className="m-0px">{item.product.name}</h3>
          <div className="d-flex ai-center ml-auto">
            <span>{item.product.price}</span>
            <span className="ml-4px">x{item.count}</span>
            <button className="ml-4px" onClick={() => onDelete(item.product.id)}>-</button>
            <button className="ml-4px" onClick={() => onAdd(item.product)}>+</button>
          </div>
        </li>
      );
    })}
  </ul>
);

export default CartTable;
