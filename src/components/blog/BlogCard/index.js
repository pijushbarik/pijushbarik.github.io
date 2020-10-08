import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Img from "gatsby-image"

import toDashSeparatedString from "../../../helpers/toDashSepatedString"

const BlogCard = ({ title, imgFluid }) => (
  <Link
    to={`/blog/${toDashSeparatedString(title)}/`}
    className="max-w-2xl w-full m-2 bg-black h-100 relative rounded-lg overflow-hidden shadow-2xl"
  >
    <article>
      {imgFluid ? (
        <Img
          className="absolute top-0 left-0 w-full h-full z-10"
          fluid={imgFluid}
        />
      ) : null}
      <div className="absolute top-0 left-0 h-full w-full z-20 bg-gradient-to-b from-transparent to-black" />
      <header>
        <div className="absolute left-0 bottom-0 z-30 w-full m-2">
          <h2 className="text-5xl capitalize font-david-libre text-white">
            <span className="stylized-underline">{title}</span>
          </h2>
        </div>
      </header>
    </article>
  </Link>
)

BlogCard.propTypes = {
  title: PropTypes.string.isRequired,
  imgFluid: PropTypes.any,
}

export default BlogCard
