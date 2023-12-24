import { useEffect } from "react";
import { useLocation } from "react-router";
import PropTypes from 'prop-types';

const ScrollToTop = ({ children, offset = 0 }) => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({
        top: offset,
        behavior: "smooth" // Add smooth scrolling behavior
      });
    }
  }, [location, offset]);

  return <>{children}</>;
};

ScrollToTop.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number // You can set a default offset value if needed
};

export default ScrollToTop;
