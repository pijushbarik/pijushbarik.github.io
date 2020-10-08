import React from "react"
import PropTypes from "prop-types"

import styles from "./style.module.scss"

const BlogPostWrapper = ({ children }) => (
  <article
    className={`${styles.blogPostWrapper} w-5/6 max-w-screen-md mx-auto font-david-libre text-3xl`}
  >
    {children}
  </article>
)

BlogPostWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BlogPostWrapper
