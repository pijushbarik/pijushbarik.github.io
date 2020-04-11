import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "../../css/global.css"

import Header from "../Header"
import ThemeSwitcher from "../ThemeSwitcher"

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
    <div className="min-h-screen flex flex-col relative">
      <ThemeSwitcher
        className="fixed"
        style={{ top: "2.1rem", right: "2rem", zIndex: 1 }}
      />
      <Header
        menuLinks={data.site.siteMetadata.menuLinks}
        className="absolute top-0 left-0 bg-white"
      />
      <div className="w-screen h-screen flex items-stretch">
        <main
          className="h-full w-full flex items-strecth"
          style={{ paddingTop: "6.6rem" }}
        >
          {children}
        </main>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
