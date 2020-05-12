import React from "react"
import PropTypes from "prop-types"

import styles from "./style.module.scss"

const Backdrop = props => {
  return (
    <div
      className={`h-screen w-screen ${styles.backdrop} ${
        props.visible ? "flex" : "hidden"
      }`}
      onClick={() => {
        typeof props.onClick === "function" && props.onClick()
      }}
    >
      {props.children}
    </div>
  )
}

Backdrop.propTypes = {
  onClick: PropTypes.func,
  visible: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
}

export default Backdrop
