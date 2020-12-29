import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"

// Global CSS
import "../../css/global.css"
import "./custom.global.scss"

import Header from "../Header"
import useDarkMode from "../../hooks/useDarkMode"

import styles from "./style.module.scss"

const Layout = ({ children }) => {
  const [isDarkMode, toggleDarkMode] = useDarkMode()

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
    <div className="min-h-screen relative">
      <Helmet>
        <script src="/js/pace.min.js"></script>
      </Helmet>
      <Header
        menuLinks={data.site.siteMetadata.menuLinks}
        themeSwitcherOnClick={() => toggleDarkMode(!isDarkMode)}
        themeSwitcherMode={isDarkMode}
      />
      <main className={`h-screen w-screen flex ${styles.main}`}>
        {children}
      </main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
