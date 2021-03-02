import { Link } from "react-router-dom";
import cs from "classnames";
import classes from "./styles.module.scss";

const ProductCard = ({ discount, hasDiscount, href, image, name, price, onAdd }) => {
  return (
    <div className={cs(classes.container, "d-flex fd-column")}>
      <Link to={href} className={cs("d-flex jc-center ai-center")}>
        <img className={classes.image} src={image} alt={name} />
      </Link>
      <h4 className="m-0px mt-16px h-32px o-hidden">
        <Link to={href}>{name}</Link>
      </h4>
      <div className="d-flex jc-space-between ai-center mt-8px">
        {hasDiscount ? (
          <>
            <span className="td-line-through">{price}</span> <span>{price - discount}</span>
          </>
        ) : (
          <span>{price}</span>
        )}

        <button onClick={onAdd}>ADD</button>
      </div>
    </div>
  )
};

export default ProductCard;
