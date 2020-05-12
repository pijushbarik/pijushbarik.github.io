import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import styles from "./style.module.scss"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div
      className={`h-screen w-screen flex flex-col justify-center 
      items-center text-center ${styles.container}`}
    >
      <h1 className="text-9xl font-light">Whoops! That&#39;s a 404!</h1>
      <p className="text-3xl mt-12">Looks like we took a wrong path here.</p>
      <Link
        className={`py-6 px-4 mt-16 text-2xl gradient-bg rounded-md font-semibold 
        shadow-md hover:shadow-lg translate-y-0 transition-all duration-500 ${styles.btn}`}
        to="/"
      >
        Rescue me
      </Link>
    </div>
  </Layout>
)

export default NotFoundPage
