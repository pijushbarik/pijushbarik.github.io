import React from "react"
import PropTypes from "prop-types"

import styles from "./style.module.scss"

/**
 * Credit: https://tobiasahlin.com/spinkit/
 */

const Spinner = props => (
  <div className={styles.foldingCube} hidden={!props.visible}>
    <div className={[styles.cube1, styles.cube].join(" ")}></div>
    <div className={[styles.cube2, styles.cube].join(" ")}></div>
    <div className={[styles.cube4, styles.cube].join(" ")}></div>
    <div className={[styles.cube3, styles.cube].join(" ")}></div>
  </div>
)

Spinner.propTypes = {
  visible: PropTypes.bool.isRequired,
}

export default Spinner
