import React from "react";
import PropTypes from "prop-types";

import "./Center.css";

function Center({ children }) {
  return <div className="center">{children}</div>;
}

Center.propTypes = {
  children: PropTypes.object,
};

export default Center;
