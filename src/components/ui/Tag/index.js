import React from "react"
import PropTypes from "prop-types"

import styles from "./style.module.scss"

const Tag = ({ title }) => (
  <p
    className={`inline-block p-2 rounded-md font-quicksand font-medium text-2xl mr-2 my-2 ${styles.tag}`}
  >
    {title}
  </p>
)

Tag.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.any,
}

export default Tag
