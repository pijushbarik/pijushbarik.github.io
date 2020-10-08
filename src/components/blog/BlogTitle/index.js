import React from "react"
import PropTypes from "prop-types"

const BlogTitle = ({ title, isSubtitle, underlined }) => (
  <React.Fragment>
    {isSubtitle ? (
      <h3 className="text-4xl capitalize font-semibold mb-8">
        <span className={underlined ? "stylized-underline" : ""}>{title}</span>
      </h3>
    ) : (
      <h1 className="text-7xl capitalize font-quicksand font-semibold mb-8">
        <span className={underlined ? "stylized-underline" : ""}>{title}</span>
      </h1>
    )}
  </React.Fragment>
)

BlogTitle.propTypes = {
  title: PropTypes.string.isRequired,
  isSubtitle: PropTypes.bool,
  underlined: PropTypes.bool,
}

export default BlogTitle
