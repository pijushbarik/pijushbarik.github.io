import PropTypes from "prop-types"
import React, { useState } from "react"

import logoSVG from "../../images/logo.svg"
import Branding from "../Branding"
import NavMenu from "../NavMenu"
import Hamburger from "../ui/Hamburger"

const Header = ({ menuLinks, className }) => {
  const [isExpanded, toggleExpand] = useState(false)

  const handleMenuButton = () => {
    toggleExpand(!isExpanded)
  }

  return (
    <header
      className={`px-5 py-5 flex w-screen items-start
      sm:items-center content-start flex-col sm:flex-row shadow-md ${className ||
        ""}`}
    >
      <div className="flex items-center flex-shrink-0 text-black mr-2">
        <Branding logo={logoSVG} title="pijush barik" />
        <Hamburger
          onClick={handleMenuButton}
          className="block sm:hidden ml-6 sm:ml-2"
        />
      </div>
      <NavMenu menuLinks={menuLinks} isExpanded={isExpanded} />
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
}

export default Header
