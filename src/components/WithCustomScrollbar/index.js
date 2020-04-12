import React from "react"
import PropTypes from "prop-types"
import CustomScroll from "react-custom-scroll"

import styles from "./style.module.scss"

const WithCustomScrollbar = props => (
  <CustomScroll heightRelativeToParent="100%">
    <div className={styles.innerContent}>{props.children}</div>
  </CustomScroll>
)

WithCustomScrollbar.propTypes = {
  children: PropTypes.node.isRequired,
}

export default WithCustomScrollbar
