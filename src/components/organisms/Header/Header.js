import { Link } from "react-router-dom";
import CartPopover from "../CartPopover";

const Header = () => (
  <div className="d-flex pt-16px pb-16px">
    <div className="mr-auto">
      <Link to="/">Catalog</Link>
    </div>
    
    <div>
      <CartPopover />
    </div>
  </div>
);

export default Header;
