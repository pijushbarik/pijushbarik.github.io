import React from "react"
import PropTypes from "prop-types"

const CircleButton = props => (
  <a
    className={`flex justify-center items-center bg-white text-black p-3 ${
      props.className ? props.className : ""
    }`}
    style={props.style ? { ...props.style } : {}}
    onClick={props.onClick}
    href={props.href}
  >
    <span>{props.children}</span>
  </a>
)

CircleButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
  href: PropTypes.string.isRequired,
}

export default CircleButton
