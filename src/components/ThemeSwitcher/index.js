import React from "react"
import PropTypes from "prop-types"

import styles from "./style.module.scss"

const SliderSwitch = ({ className, style, onClick, isDarkMode }) => (
  <div className={className || ""} style={style}>
    <label id="switch" className={styles.switch}>
      <input
        onChange={onClick}
        checked={isDarkMode}
        type="checkbox"
        id="theme-slider-btn"
      />
      <span className={[styles.slider, styles.round].join(" ")}></span>
    </label>
  </div>
)

SliderSwitch.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
}

export default SliderSwitch
