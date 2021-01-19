import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import WithCustomScrollbar from "../../components/WithCustomScrollbar"
import styles from "./style.module.scss"

import githubLogo from "../../images/github.svg"
import codepenLogo from "../../images/codepen.svg"
import twitterLogo from "../../images/twitter.svg"
import linkedinLogo from "../../images/linkedin.svg"
import facebookLogo from "../../images/facebook.svg"

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      profileImg: file(relativePath: { eq: "photo-pijush.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="About" keywords={["About", "About me"]} />
      <WithCustomScrollbar topPadded sidePadded>
        <div className="w-full flex flex-wrap">
          <div className="w-full mb-8">
            <h1
              className="text-7xl block w-max-content mx-auto sm:mx-0 \
              capitalize font-playfair font-bold left-outline"
            >
              <span>about me</span>
            </h1>
          </div>
          <div className="w-full sm:w-4/12">
            <Img
              className={`rounded-full shadow-lg mx-auto sm:mx-0 
              ${styles.profileImg}`}
              fluid={data.profileImg.childImageSharp.fluid}
            />

            <div
              className={`flex sm:flex-col justify-center items-center 
              mt-12 ${styles.socialIcons}`}
            >
              <a
                href="https://github.com/pijushbarik"
                className="mr-6 sm:mr-0 sm:mb-10"
              >
                <img
                  src={githubLogo}
                  alt=""
                  className="h-10 sm:h-12 lg:h-16 w-10 sm:w-12 lg:w-16 \
                  transition-transform duration-200 ease-out"
                />
              </a>

              <a
                href="https://codepen.io/heisenberg-pb"
                className="mr-6 sm:mr-0 sm:mb-10"
              >
                <img
                  src={codepenLogo}
                  alt=""
                  className="h-10 sm:h-12 lg:h-16 w-10 sm:w-12 lg:w-16 \
                  transition-transform duration-200 ease-out"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/pijushbarik/"
                className="mr-6 sm:mr-0 sm:mb-10"
              >
                <img
                  src={linkedinLogo}
                  alt=""
                  className="h-10 sm:h-12 lg:h-16 w-10 sm:w-12 lg:w-16 \
                  transition-transform duration-200 ease-out"
                />
              </a>

              <a
                href="https://twitter.com/pijushbarik"
                className="mr-6 sm:mr-0 sm:mb-10"
              >
                <img
                  src={twitterLogo}
                  alt=""
                  className="h-10 sm:h-12 lg:h-16 w-10 sm:w-12 lg:w-16 \
                  transition-transform duration-200 ease-out"
                />
              </a>

              <a href="https://www.facebook.com/barikpijush" className="">
                <img
                  src={facebookLogo}
                  alt=""
                  className="h-10 sm:h-12 lg:h-16 w-10 sm:w-12 lg:w-16 \
                  transition-transform duration-200 ease-out"
                />
              </a>
            </div>
          </div>
          <div
            className="w-full sm:w-7/12 md:w-6/12 lg:w-5/12 text-3xl mt-5 \
            sm:mt-0 ml-0 sm:ml-5 leading-snug"
          >
            <h2 className="text-6xl font-playfair">
              Hi there. I am Pijush Barik. I am a web developer.
            </h2>

            <p className="mt-12">
              From the first time I learned my first programming language C in
              college in 2014, I started loving coding. I have completed my
              Masters in CS and played with many languages and technologies till
              now.
            </p>

            <p className="mt-12">
              I mostly work with <strong>ReactJS</strong> &amp;{" "}
              <strong>Node.js</strong> now. I love designing things with{" "}
              <strong>CSS</strong>. I currently working as a{" "}
              <strong>Full Stack Web Developer</strong>.
            </p>

            <p className="mt-12">
              I did intership and worked for a short time in the prestigious{" "}
              <strong>Indian Institute of Technology Kharagpur</strong>. I was
              there responsible for developing a software product for{" "}
              <strong>real time image processing with NVIDIA GPUs</strong>. I
              have written codes in <strong>C++</strong> &amp;{" "}
              <strong>CUDA</strong>. Implemented cross-OS C++ build tool with{" "}
              <strong>CMake</strong>.
            </p>

            <p className="mt-12">
              I am very fortunate that I chose coding as my hobby &amp; career
              too. It feels so grateful to think that things I learned and did
              for fun in college is now my profession. I&apos;m the type of
              person who keep awake late night to fix a bug. I&apos;m also
              interested in <strong>machine learning</strong>.
            </p>

            <p className="mt-12">
              Alongside coding I love to read story books, watching crime
              thriller movies and TV series. When not doing anything, I sleep. I
              sleep a lot.
            </p>

            <p className="mt-12 gradient-bg block w-max-content py-2 px-4">
              <span>One last thing...</span>
            </p>

            <p className="mt-3">
              I never give up. I never stop learning &amp; improving myself.
            </p>

            <p className="mt-12 font-playfair italic">
              Living, learning &amp; levelling up everyday a little bit.
            </p>
          </div>
          <div className="w-full flex flex-col column justify-center items-center mt-16">
            <div className="w-full mb-5">
              <p className="text-5xl capitalize font-playfair text-center">
                my skills
              </p>
            </div>
            <div className="max-w-6xl w-full sm:flex shadow-lg">
              <div
                className="w-full sm:w-1/4 px-5 py-12 sm:p-5 font-playfair text-4xl flex \
                justify-center items-center break-words  border border-red-500 border-solid \
                rounded-t-lg sm:rounded-t-none sm:rounded-l-lg"
              >
                <span>Languages</span>
              </div>
              <div
                className="w-full sm:w-3/4 p-5 gradient-bg text-white overflow-hidden \
                rounded-b-lg sm:rounded-b-none sm:rounded-r-lg py-12"
              >
                <ul className="list-disc list-inside text-3xl flex justify-around">
                  <div>
                    <li className="mb-5">JavaScript</li>
                    <li className="mb-5">Node.js</li>
                    <li className="mb-5">HTML</li>
                    <li className="mb-5">CSS</li>
                    <li>SCSS</li>
                  </div>
                  <div>
                    <li className="mb-5">Python</li>
                    <li className="mb-5">C</li>
                    <li className="mb-5">C++</li>
                    <li className="mb-5">CUDA</li>
                    <li>Java</li>
                  </div>
                </ul>
              </div>
            </div>

            <div className="max-w-6xl w-full sm:flex sm:flex-row-reverse mt-12 mb-12 shadow-lg">
              <div
                className="w-full sm:w-1/4 px-5 py-12 sm:p-5 font-playfair text-4xl flex \
                justify-center items-center break-words  border border-red-500 \
                sm:border-yellow-500 border-solid rounded-t-lg sm:rounded-t-none sm:rounded-r-lg"
              >
                <span>Technologies</span>
              </div>
              <div
                className="w-full sm:w-3/4 p-5 gradient-bg text-white overflow-hidden \
                rounded-b-lg sm:rounded-b-none sm:rounded-l-lg py-12"
              >
                <ul className="list-disc list-inside text-3xl flex justify-around">
                  <div>
                    <li className="mb-5">ReactJS</li>
                    <li className="mb-5">Next.js</li>
                    <li className="mb-5">Redux</li>
                    <li className="mb-5">REST API</li>
                    <li className="mb-5">GraphQL</li>
                    <li className="mb-5">Gatsby.js</li>
                    <li className="mb-5">Express</li>
                    <li className="mb-5">Tailwind CSS</li>
                    <li>Git</li>
                  </div>
                  <div>
                    <li className="mb-5">Bootstrap</li>
                    <li className="mb-5">MaterialUI</li>
                    <li className="mb-5">jQuery</li>
                    <li className="mb-5">Mongoose</li>
                    <li className="mb-5">Jest</li>
                    <li className="mb-5">Mocha</li>
                    <li className="mb-5">MongoDB</li>
                    <li className="mb-5">MySQL</li>
                    <li>Heroku</li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </WithCustomScrollbar>
    </Layout>
  )
}

export default AboutPage
