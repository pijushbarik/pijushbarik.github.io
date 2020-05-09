import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"

// Global CSS
import "../../css/global.css"
import "./custom.global.scss"
// React custom scroll CSS
import "react-custom-scroll/dist/customScroll.css"

import ThemeContext from "../../context/ThemeContext"
import Header from "../Header"

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
          <Helmet>
            <script src="/js/pace.min.js"></script>
          </Helmet>
          <Header
            menuLinks={data.site.siteMetadata.menuLinks}
            themeSwitcherOnClick={theme.toggleDark}
            themeSwitcherMode={theme.isDarkMode}
          />
          <main className={`h-screen w-screen flex ${styles.main}`}>
            {children}
          </main>
        </div>
      )}
    </ThemeContext.Consumer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
