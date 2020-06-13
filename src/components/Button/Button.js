import React from 'react';
import PropTypes from "prop-types";

import './Button.scss';

const Button = (props) => {

  return (
    <div className="button">
      <button className={props.selected ? "selected" : ""} onClick={() => props.onClick()}>{props.text}</button>
    </div>
  )
};

Button.propTypes = {
  onClick: PropTypes.func,
  selected: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default Button;
