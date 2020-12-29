import PropTypes from "prop-types"
import React, { useState } from "react"

import Branding from "../Branding"
import NavMenu from "../NavMenu"
import Hamburger from "../ui/Hamburger"
import ThemeSwitcher from "../ThemeSwitcher"

import styles from "./style.module.scss"

const Header = ({
  menuLinks,
  className,
  themeSwitcherOnClick,
  themeSwitcherMode,
}) => {
  const [isExpanded, toggleExpand] = useState(false)

  const handleMenuButton = () => {
    toggleExpand(!isExpanded)
  }

  return (
    <header
      className={`px-5 flex items-start sm:items-center justify-center 
      sm:justify-start flex-col sm:flex-row shadow-md ${className || ""} ${
        styles.header
      }`}
    >
      <div className="flex items-center flex-shrink-0 mr-2 h-24">
        <Branding />
        <Hamburger
          onClick={handleMenuButton}
          className="block sm:hidden ml-20"
          color="#ff5851"
        />
      </div>
      <NavMenu className="h-24" menuLinks={menuLinks} isExpanded={isExpanded} />

      <ThemeSwitcher
        className={`fixed ${styles.themeSwitcher}`}
        onClick={themeSwitcherOnClick}
        isDarkMode={themeSwitcherMode}
      />
    </header>
  )
}

Header.propTypes = {
  menuLinks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ),
  className: PropTypes.string,
  themeSwitcherMode: PropTypes.bool.isRequired,
  themeSwitcherOnClick: PropTypes.func.isRequired,
}

export default Header
