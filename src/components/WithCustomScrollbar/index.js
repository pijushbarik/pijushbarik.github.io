import React from "react"
import PropTypes from "prop-types"

import Container from "../Container"

import styles from "./styles.module.scss"

const WithCustomScrollbar = props => (
  <div className={`h-full w-full overflow-auto ${styles.customScroll}`}>
    <Container topPadded={props.topPadded} sidePadded={props.sidePadded}>
      {props.children}
    </Container>
  </div>
)

WithCustomScrollbar.propTypes = {
  children: PropTypes.node.isRequired,
  topPadded: PropTypes.bool,
  sidePadded: PropTypes.bool,
}

export default WithCustomScrollbar
