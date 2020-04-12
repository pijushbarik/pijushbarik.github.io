import React from "react"
import PropTypes from "prop-types"

const Hamburger = ({ onClick, className, color }) => (
  <button
    onClick={onClick}
    className={`flex items-center px-3 py-2 border rounded ${className || ""}`}
    style={{ border: `1px solid ${color || "#000"}` }}
  >
    <svg
      className="fill-current h-6 w-6"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={color || "#000"}
        d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
      />
    </svg>
  </button>
)

Hamburger.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  color: PropTypes.string,
}

export default Hamburger
