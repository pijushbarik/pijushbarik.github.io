import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import BlogTitle from "../BlogTitle"

const BlogHeader = ({ imgFluid, copyright = null, title }) => (
  <header className="mb-5">
    <BlogTitle title={title} underlined />
    <Img className="w-full mx-auto" fluid={imgFluid} />
    {copyright}
  </header>
)

BlogHeader.propTypes = {
  imgFluid: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  copyright: PropTypes.any,
}

export default BlogHeader
