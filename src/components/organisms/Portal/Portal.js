import { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";

const Portal = ({ children, selector }) => {
  const ref = useRef();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    ref.current = document.querySelector(selector);
  }, [selector])

  return isMounted && createPortal(children, ref.current);
};

Portal.defaultProps = {
  children: null,
  selector: "#modal-root",
};

export default Portal;
