import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

// Global CSS
import "../../css/global.css"
import "./custom.global.scss"
// React custom scroll CSS
import "react-custom-scroll/dist/customScroll.css"

import ThemeContext from "../../context/ThemeContext"
import Header from "../Header"
import ThemeSwitcher from "../ThemeSwitcher"

import styles from "./style.module.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  return (
    <ThemeContext.Consumer>
      {theme => (
        <div
          className={`min-h-screen relative ${
            theme.isDarkMode ? "dark" : "light"
          }`}
        >
          <ThemeSwitcher
            className={`fixed ${styles.themeSwitcher}`}
            onClick={theme.toggleDark}
            isDarkMode={theme.isDarkMode}
          />
          <Header
            menuLinks={data.site.siteMetadata.menuLinks}
            className="absolute top-0 left-0"
          />
          <div className="w-screen h-screen flex items-stretch">
            <main className={`h-full w-full flex items-strecth ${styles.main}`}>
              {children}
            </main>
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
