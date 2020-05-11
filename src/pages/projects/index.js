import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import WithCustomScrollbar from "../../components/WithCustomScrollbar"
import ProjectCard from "../../components/ProjectCard"
import styles from "./styles.module.scss"

const ProjectPage = () => {
  const data = useStaticQuery(graphql`
    query {
      pvs: file(relativePath: { eq: "proficientvision.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      dreamity: file(relativePath: { eq: "dreamityevents.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pomodoro: file(relativePath: { eq: "pomodoro-clock.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      calculator: file(relativePath: { eq: "calculator.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      quotemachine: file(relativePath: { eq: "rand-quote-generator.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Portfolio" />
      <WithCustomScrollbar sidePadded topPadded>
        <h1
          className="text-7xl block w-max-content mx-auto sm:mx-0 \
          capitalize font-playfair font-bold left-outline mb-8"
        >
          <span>Projects</span>
        </h1>

        <div className={`text-3xl leading-snug ${styles.projects}`}>
          <ProjectCard
            imgFluid={data.pvs.childImageSharp.fluid}
            title="Proficient Vision Solutions"
            description="Company cum Product website of Proficient Vision Solutions"
            tags={["HTML", "SCSS", "jQuery"]}
            link="http://proficientvisionsolutions.com"
            // className={`w-full sm:w-1/2 md:w-1/3 ${styles.projectCard}`}
          />

          <ProjectCard
            imgFluid={data.dreamity.childImageSharp.fluid}
            title="Dreamity Events"
            description="An event management company portfolio website"
            tags={["React", "SCSS", "Firebase"]}
            link="https://dreamityevents.com/"
            // className={`w-full sm:w-1/2 md:w-1/3 ${styles.projectCard}`}
          />

          <ProjectCard
            imgFluid={data.pomodoro.childImageSharp.fluid}
            title="Pomodoro Clock"
            description="A digital clock for Pomodomo Technique time management"
            tags={["React", "SCSS"]}
            link="https://codepen.io/heisenberg-pb/pen/NBaZGy"
            // className={`w-full sm:w-1/2 md:w-1/3 ${styles.projectCard}`}
          />

          <ProjectCard
            imgFluid={data.calculator.childImageSharp.fluid}
            title="Calculator"
            description="Simple calculator made in React"
            tags={["React", "SCSS"]}
            link="https://codepen.io/heisenberg-pb/pen/NBgPEg"
            // className={`w-full sm:w-1/2 md:w-1/3 ${styles.projectCard}`}
          />

          <ProjectCard
            imgFluid={data.quotemachine.childImageSharp.fluid}
            title="Quote Machine"
            description="Random quote generator made in React"
            tags={["React", "SCSS"]}
            link="https://codepen.io/heisenberg-pb/pen/ajvmoq"
            // className={`w-full sm:w-1/2 lg:w-1/3 ${styles.projectCard}`}
          />
        </div>
      </WithCustomScrollbar>
    </Layout>
  )
}

export default ProjectPage
