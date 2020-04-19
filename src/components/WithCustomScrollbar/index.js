import React from "react"
import PropTypes from "prop-types"
import CustomScroll from "react-custom-scroll"

const WithCustomScrollbar = props => (
  <CustomScroll flex="1">
    <div className="py-4 px-6">{props.children}</div>
  </CustomScroll>
)

WithCustomScrollbar.propTypes = {
  children: PropTypes.node.isRequired,
}

export default WithCustomScrollbar
