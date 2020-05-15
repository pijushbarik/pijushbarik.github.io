import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

import styles from "./styles.module.scss"
import ExternelLinkIcon from "../SVG/ExternelLinkIcon"

const ProjectCard = props => {
  return (
    <div
      className={`${styles.projectCard} ${props.className || ""}`}
      style={props.style || {}}
    >
      <div className={`ml-12 ${styles.projectCard__header}`}>
        <h2 className="font-light text-4xl">{props.title}</h2>
      </div>
      <Img
        className={`${styles.projectCard__img}`}
        fluid={props.imgFluid}
        alt={props.imgAltText || ""}
      />
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={props.link}
        className={`h-12 w-12 ${styles.projectCard__link}`}
      >
        <ExternelLinkIcon />
      </a>
      <div className={`ml-12 ${styles.projectCard__footer}`}>
        <p
          className={`text-2xl font-semibold ${styles.projectCard__description}`}
        >
          {props.description}
        </p>
        <div className="mt-4">
          {props.tags.map(tag => (
            <span
              className={`rounded-md px-3 py-2 text-2xl font-semibold select-none ${styles.projectCard__tag}`}
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

ProjectCard.propTypes = {
  /** Gatsby Image fluid object */
  imgFluid: PropTypes.object.isRequired,
  /** Image alt text */
  imgAltText: PropTypes.string,
  /** Project card title */
  title: PropTypes.string.isRequired,
  /** Project tags */
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  /** Project description */
  description: PropTypes.string.isRequired,
  /* Link to the project */
  link: PropTypes.string,
  /** Class applied to wrapper */
  className: PropTypes.string,
  /** Inline styles applied to wrapper */
  style: PropTypes.object,
}

export default ProjectCard
