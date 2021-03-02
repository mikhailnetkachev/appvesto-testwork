import cs from "classnames";

import classes from "./styles.module.scss";

const Product = () => (
  <div className={cs(classes.container, "wrapper")}>
    <div>
      image
    </div>
    <div>description</div>
  </div>
);

export default Product;
