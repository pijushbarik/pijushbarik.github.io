import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import HiThere from "../components/SVG/HiThere"
import IAmPijush from "../components/SVG/IAmPijush"

import styles from "./style.module.scss"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" description="Hi there. Welcome to my website." />
      <div className={`h-screen w-screen relative ${styles.home}`}>
        <div
          className="absolute top-0 left-0 h-screen w-screen flex \
          flex-col items-center justify-center px-5"
        >
          <div className={`mt-auto ${styles.container}`}>
            <HiThere className={`h-auto ${styles.hiThere}`} />
            <IAmPijush className={`mt-6 h-auto ${styles.iAmPijush}`} />
          </div>
          <footer className="mt-auto w-full p-3 flex flex-col items-center justify-center">
            <p className={`text-xl text-center ${styles.footerText}`}>
              Handcrafted with{" "}
              <span style={{ color: "var(--color-red)" }}>&hearts;</span> by me.
              &copy; {new Date().getFullYear()}
            </p>
            <p className={`text-xl text-center ${styles.footerText}`}>
              Source code available at{" "}
              <a
                href="https://github.com/pijushbarik/pijushbarik.github.io"
                className="underline"
                style={{ color: "var(--color-red)" }}
              >
                GitHub
              </a>
            </p>
          </footer>
        </div>
      </div>
    </Layout>
  )
}

export default React.memo(IndexPage)
