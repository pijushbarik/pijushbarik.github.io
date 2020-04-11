import React from "react"
import PropTypes from "prop-types"

import styles from "./style.module.scss"

const Branding = ({ logo, title }) => (
  <div className="flex items-center flex-shrink-0 text-black">
    <img src={logo} alt="" className="h-16 w-16 mr-2" />
    <span className={`font-bold text-5xl ${styles.brandText}`}>{title}</span>
  </div>
)

Branding.propTypes = {
  logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Branding
