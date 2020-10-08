import React from "react"

import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import WithCustomScrollbar from "../../components/WithCustomScrollbar"
import BlogCard from "../../components/blog/BlogCard"
import { graphql, useStaticQuery } from "gatsby"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      helloWorld: file(relativePath: { eq: "blog/hello-world/header.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 380) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Blog" />
      <WithCustomScrollbar sidePadded topPadded>
        <h1
          className="text-7xl block mx-auto sm:mx-0 \
          capitalize font-david-libre font-bold left-outline mb-8"
        >
          <span>My Blog</span>
        </h1>

        <section className="text-3xl my-5">
          <p className="mb-3">
            Hello people from the Internet! It's a pleasure to meet you. Welcome
            to my blog.
          </p>

          <p>I write this blog for</p>
        </section>

        <div className="flex items-center flex-wrap w-full">
          <BlogCard
            title="Hello World!"
            imgFluid={data.helloWorld.childImageSharp.fluid}
          />
          <BlogCard
            title="Hello World! consectetur adipiscing elit."
            imgFluid={data.helloWorld.childImageSharp.fluid}
          />
          <BlogCard
            title="Hello World! Lorem ipsum dolor sit amet"
            imgFluid={data.helloWorld.childImageSharp.fluid}
          />
          <BlogCard
            title="Hello World! Lorem"
            imgFluid={data.helloWorld.childImageSharp.fluid}
          />
          <BlogCard
            title="Hello World! Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            imgFluid={data.helloWorld.childImageSharp.fluid}
          />
          <BlogCard
            title="Hello World! piscing elit."
            imgFluid={data.helloWorld.childImageSharp.fluid}
          />
          <BlogCard
            title="Hello World! elit."
            imgFluid={data.helloWorld.childImageSharp.fluid}
          />
          <BlogCard
            title="Hello World! adipiscing elit."
            imgFluid={data.helloWorld.childImageSharp.fluid}
          />
        </div>
      </WithCustomScrollbar>
    </Layout>
  )
}

export default IndexPage
