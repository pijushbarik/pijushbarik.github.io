import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import styles from "./style.module.scss"

const NavMenu = ({ menuLinks, isExpanded, className }) => (
  <nav className={[styles.nav].concat(className || "").join(" ")}>
    <ul
      className={`${styles.collapsed} ${isExpanded ? styles.isExpanded : ""}`}
    >
      {menuLinks.map((menuLink, idx) => (
        <Link
          key={idx}
          to={menuLink.link}
          activeClassName={styles.active}
          className="text-3xl font-semibold capitalize flex content-center items-center"
        >
          <li>
            <span>{menuLink.name}</span>
          </li>
        </Link>
      ))}
    </ul>
  </nav>
)

NavMenu.propTypes = {
  menuLinks: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
  isExpanded: PropTypes.bool.isRequired,
  className: PropTypes.string,
}

export default NavMenu
