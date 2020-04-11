import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import NotFoundImg from "../../images/404.svg"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Whoops! That&#39;s a 404!</h1>
    <img className="block mx-auto w-6/12 h-auto" src={NotFoundImg} alt="" />
    <p>Looks like we took a wrong path here</p>
    <Link to="/">Rescue me</Link>
  </Layout>
)

export default NotFoundPage
