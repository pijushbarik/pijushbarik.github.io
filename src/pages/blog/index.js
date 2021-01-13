import React from "react"

import Layout from "../../components/Layout"
import SEO from "../../components/SEO"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Blog"
      description="Pijus Bariks's Dev blog"
      meta={[{ name: "robots", content: "noindex" }]}
    />
    <h1>Blog</h1>
    <h2>Coming soon...</h2>
  </Layout>
)

export default IndexPage
