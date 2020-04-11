import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import BGImg from "../images/home-bg.jpg"
import AnimatedHello from "../components/AnimatedHello"

import styles from "./style.module.scss"

const IndexPage = () => {
  const ref = React.useRef(null)

  React.useEffect(() => {
    ref.current.classList.add(styles.animate)
  }, [])

  return (
    <Layout>
      <SEO title="Home" />
      <div className="flex justify-center items-center flex-1">
        <div
          className="w-0 sm:w-6/12 h-full bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${BGImg})` }}
        ></div>
        <div className="w-full sm:w-6/12 h-full flex flex-col justify-center items-center px-5">
          <AnimatedHello />
          <span ref={ref} className={styles.name}>
            I&apos;m <br />
            Pijush
          </span>
        </div>
      </div>
    </Layout>
  )
}

export default React.memo(IndexPage)
