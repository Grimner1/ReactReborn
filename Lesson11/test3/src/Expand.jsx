import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const Expand = ({ children, isOpen, toggle }) => {
  return (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">Some title</span>
        <button className="expand__toggle-btn" onClick={toggle}>
          {isOpen ? <i>-</i> : <i>+</i>}

          {/* <FontAwesomeIcon icon={solid("arrow-up")} /> */}
          {/* <FontAwesomeIcon icon="fa-solid fa-arrow-up" /> */}
        </button>
      </div>
      <div className="expand__content">
        {/* <!-- ... expand content (children) --> */}
        {isOpen && children}
      </div>
    </div>
  );
};

Expand.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.element,
};

Expand.defaultProps = {
  children: <div>111111111</div>,
};

export default Expand;
