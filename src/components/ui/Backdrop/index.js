import React from "react"
import PropTypes from "prop-types"

import styles from "./style.module.scss"

const Backdrop = props => {
  return (
    <div
      className={`h-screen w-screen ${styles.backdrop} ${
        props.visible ? "flex" : "hidden"
      }`}
    >
      {props.children}
    </div>
  )
}

Backdrop.propTypes = {
  visible: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
}

export default Backdrop
