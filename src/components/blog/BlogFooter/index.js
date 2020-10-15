import React from "react"
import PropTypes from "prop-types"
import { dateTimeFormatter } from "../../../helpers/dateTimeFormatter"
import BlogTags from "../BlogTags"

const BlogFooter = ({ timestamp, tags }) => (
  <footer className="flex justify-between items-end">
    <BlogTags className="w-2/3" tags={tags} />
    <div className="w-1/3">
      {" "}
      <p className="text-right">
        Published on{" "}
        <time dateTime={new Date(timestamp).toISOString()}>
          {dateTimeFormatter(timestamp)}
        </time>{" "}
      </p>
      <p className="text-right">
        by{" "}
        <span>
          <author>
            <a href="mailto:pijush.barik8@gmail.com">Pijush Barik</a>
          </author>
        </span>
      </p>
    </div>
  </footer>
)

BlogFooter.propTypes = {
  timestamp: PropTypes.number.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default BlogFooter
