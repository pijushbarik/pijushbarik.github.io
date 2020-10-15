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

          <p></p>
        </section>

        <section className="flex items-center flex-wrap w-full">
          <BlogCard
            title="Hello World!"
            imgFluid={data.helloWorld.childImageSharp.fluid}
            timestamp={1602773453245}
            tags={["blog", "hello-world"]}
          />
          <BlogCard
            title="Hello World! consectetur adipiscing elit."
            imgFluid={data.helloWorld.childImageSharp.fluid}
            timestamp={1602305400000}
            tags={["blog", "hello-world"]}
          />
          <BlogCard
            title="Hello World! Lorem ipsum dolor sit amet"
            imgFluid={data.helloWorld.childImageSharp.fluid}
            timestamp={1602773403245}
            tags={["blog", "hello-world"]}
          />
          <BlogCard
            title="Hello World! Lorem"
            imgFluid={data.helloWorld.childImageSharp.fluid}
            timestamp={1602773153245}
            tags={["blog", "hello-world"]}
          />
          <BlogCard
            title="Hello World! Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            imgFluid={data.helloWorld.childImageSharp.fluid}
            timestamp={1302773453245}
            tags={["blog", "hello-world"]}
          />
          <BlogCard
            title="Hello World! piscing elit."
            imgFluid={data.helloWorld.childImageSharp.fluid}
            timestamp={1612773453245}
            tags={["blog", "hello-world"]}
          />
          <BlogCard
            title="Hello World! elit."
            imgFluid={data.helloWorld.childImageSharp.fluid}
            timestamp={1602773553245}
            tags={["blog", "hello-world"]}
          />
          <BlogCard
            title="Hello World! adipiscing elit."
            imgFluid={data.helloWorld.childImageSharp.fluid}
            timestamp={1602298200000}
            tags={["blog", "hello-world"]}
          />
        </section>
      </WithCustomScrollbar>
    </Layout>
  )
}

export default IndexPage
