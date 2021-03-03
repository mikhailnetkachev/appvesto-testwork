import cs from "classnames";

import Image from "../Image";
import classes from "./styles.module.scss";

const Picture = ({ blocked, src, alt }) => (
  <picture className={cs({ [classes.blocked]: blocked })}>
    <Image src={src} alt={alt} />
  </picture>
);

Picture.defaultProps = {
  blocked: true,
};

export default Picture;
