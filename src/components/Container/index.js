import React from "react"
import PropTypes from "prop-types"

import styles from "./style.module.scss"

const Container = props => (
  <div
    className={`${(props.topPadded && styles.topMargin) || ""}
    ${(props.sidePadded && styles.sidePadding) || ""}`}
  >
    {props.children}
  </div>
)

Container.propTypes = {
  children: PropTypes.node.isRequired,
  topPadded: PropTypes.bool,
  sidePadded: PropTypes.bool,
}

export default Container
