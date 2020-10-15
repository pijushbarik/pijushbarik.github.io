import React from "react"
import PropTypes from "prop-types"
import Tag from "../../ui/Tag"

const BlogTags = ({ tags, className }) => (
  <div className={className}>
    {tags.map(tag => (
      <Tag key={tag} title={`#${tag}`} />
    ))}
  </div>
)

BlogTags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
}

export default BlogTags
