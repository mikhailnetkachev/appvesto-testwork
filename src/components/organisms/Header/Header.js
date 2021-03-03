import { Link } from "react-router-dom";

const Header = () => (
  <div className="d-flex">
    <Link to="/">Catalog</Link>
    <Link to="/cart">Cart</Link>
  </div>
);

export default Header;
