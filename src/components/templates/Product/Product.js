import { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import cs from "classnames";

import Picture from "../../atoms/Picture";
import { cartEmitters, productEmitters } from "../../../store";
import classes from "./styles.module.scss";

const Product = () => {
  const { id } = useParams();
  const { goBack } = useHistory();
  const dispatch = useDispatch();
  const product = useSelector(store => store.product);

  useEffect(() => {
    dispatch(productEmitters.load({ id }));

    return () => dispatch(productEmitters.clear());
  }, [dispatch, id]);

  if (product.loading) {
    return (
      <div className="wrapper mt-48px">Loading ...</div>
    );
  }

  if (product.error) {
    return (
      <div className="wrapper mt-48px">{product.error}</div>
    );
  }

  return (
    <div className={cs(classes.container, "wrapper mt-48px")}>
      <div className={classes.navigation}>
        <button onClick={goBack}>BACK</button>
      </div>
      <div className={cs(classes.showcase, "mt-32px")}>
        <div className={classes.media}>
          <Picture src={product.item.img_url} alt={product.item.name} />
        </div>
        <div className={classes.description}>
          <h2>{product.item.name}</h2>
          <div className="mt-8px">{product.item.category}</div>
          <div className="mt-16px">
            <button onClick={() => dispatch(cartEmitters.addItem(product.item))}>ADD</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
