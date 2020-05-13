import React from "react"
import PropTypes from "prop-types"
import CustomScroll from "simplebar-react"

import Container from "../Container"

const WithCustomScrollbar = props => (
  <CustomScroll className="h-full w-full">
    <Container topPadded={props.topPadded} sidePadded={props.sidePadded}>
      {props.children}
    </Container>
  </CustomScroll>
)

WithCustomScrollbar.propTypes = {
  children: PropTypes.node.isRequired,
  topPadded: PropTypes.bool,
  sidePadded: PropTypes.bool,
}

export default WithCustomScrollbar
