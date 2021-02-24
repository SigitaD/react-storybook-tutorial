import React from "react";
import PropTypes from "prop-types";

import "./Input.css";

function Input(props) {
  const { size = "small", ...rest } = props;
  return (
    <input
      type="text"
      className={`input ${size}`}
      value={size}
      {...rest}
    ></input>
  );
}

Input.propTypes = {
  size: PropTypes.string,
};

export default Input;
