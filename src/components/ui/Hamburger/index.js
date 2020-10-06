import React from "react"
import PropTypes from "prop-types"

import MenuIcon from "../../../images/menu.svg"

const Hamburger = ({ onClick, className }) => (
  <input
    type="image"
    onClick={onClick}
    className={`h-12 w-12 ${className ? className : ""}`}
    src={MenuIcon}
    alt="menu"
  />
)

Hamburger.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
}

export default Hamburger
