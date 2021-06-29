import Container from "@components/Container";
import Head from "next/head";
import HiThere from "@components/SVGs/HiThere";
import IAmPijush from "@components/SVGs/IAmPijush";
import styles from "./styles.module.scss";
import { NextPage } from "next";
import classNames from "@lib/helpers/classNames";
import ProjectCard from "@components/ProjectCard";

type PageProps = {};

const Index: NextPage<PageProps> = () => {
  return (
    <>
      <Head>
        <title>Pijush Barik</title>
      </Head>

      <Container>
        <section className="py-28">
          <Container fluid>
            <div>
              <HiThere className={styles.hiThere} />
              <IAmPijush className={styles.iAmPijush} />
              <p className={styles.subtitle}>
                I help people make the world better through quality softwares.
              </p>
            </div>
          </Container>
        </section>

        <section id="about" className="bg-yellow-900 py-28">
          <Container fluid className="space-y-10">
            <h2 className="text-5xl font-serif font-bold mb-8">About Me.</h2>

            <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 space-x-0 md:space-x-10">
              <div className="w-full md:w-4/12">
                <img
                  src="/assets/pijush-barik.jpeg"
                  alt="Pijush Barik"
                  className={classNames(
                    "rounded-full shadow-lg mx-auto md:mx-0",
                    styles.profileImg
                  )}
                />
              </div>

              <div className="w-full md:w-8/12 leading-snug text-2xl">
                <h2 className="text-5xl font-serif">
                  Hi there. I am Pijush Barik. I am a web developer.
                </h2>

                <p className="mt-12">
                  From the first time I learned my first programming language C
                  in college in 2014, I started loving coding. I have completed
                  my Masters in CS and played with many languages and
                  technologies till now.
                </p>

                <p className="mt-12">
                  I mostly work with <strong>ReactJS</strong> &amp;{" "}
                  <strong>Node.js</strong> now. I love designing things with{" "}
                  <strong>CSS</strong>. I currently working as a{" "}
                  <strong>Full Stack Web Developer</strong>.
                </p>

                <p className="mt-12">
                  I am very fortunate that I chose coding as my hobby &amp;
                  career too. It feels so grateful to think that things I
                  learned and did for fun in college is now my profession.
                  I&apos;m the type of person who keep awake late night to fix a
                  bug.
                </p>

                <p className="mt-12">
                  Alongside coding I love to ride my bike, read story books,
                  watching crime thriller movies and TV series.
                </p>

                <p className="mt-12">
                  <span>One last thing...</span>
                </p>

                <p className="mt-3">
                  I never give up. I never stop learning &amp; improving myself.
                </p>

                <p className="mt-12 font-serif italic">
                  Living, learning &amp; levelling up everyday a little bit.
                </p>
              </div>
            </div>
          </Container>
        </section>

        <section id="works" className="py-28">
          <Container fluid className="space-y-10">
            <h2 className="text-5xl font-serif font-bold mb-8">Works.</h2>

            <div className={styles.projects}>
              <ProjectCard
                src="/assets/projects/proficientvision-pijush-barik.jpg"
                alt=""
                title="Proficient Vision Solutions"
                description="Company cum Product website of Proficient Vision Solutions"
                tags={["HTML", "SCSS", "jQuery"]}
                link="http://proficientvisionsolutions.com"
                className={styles.projectCard}
              />

              <ProjectCard
                src="/assets/projects/dreamityevents-pijush-barik.jpg"
                alt=""
                title="Dreamity Events"
                description="An event management company portfolio website"
                tags={["React", "SCSS", "Firebase"]}
                link="https://dreamityevents.com/"
                className={styles.projectCard}
              />

              <ProjectCard
                src="/assets/projects/pomodoro-clock-pijush-barik.jpg"
                alt=""
                title="Pomodoro Clock"
                description="A digital clock for Pomodomo Technique time management"
                tags={["React", "SCSS"]}
                link="https://codepen.io/heisenberg-pb/pen/NBaZGy"
                className={styles.projectCard}
              />

              <ProjectCard
                src="/assets/projects/calculator-pijush-barik.jpg"
                alt=""
                title="Calculator"
                description="Simple calculator made in React"
                tags={["React", "SCSS"]}
                link="https://codepen.io/heisenberg-pb/pen/NBgPEg"
                className={styles.projectCard}
              />

              <ProjectCard
                src="/assets/projects/rand-quote-generator-pijush-barik.jpg"
                alt=""
                title="Quote Machine"
                description="Random quote generator made in React"
                tags={["React", "SCSS"]}
                link="https://codepen.io/heisenberg-pb/pen/ajvmoq"
                className={styles.projectCard}
              />
            </div>
          </Container>
        </section>

        <section id="tech-stacks" className="bg-gray-900 py-28">
          <Container fluid className="space-y-10">
            <h2 className="text-5xl font-serif font-bold">My Tech Stacks.</h2>

            <div>
              <div>
                <div className="font-serif text-4xl mb-6">
                  <span>Languages</span>
                </div>

                <ul className={styles.tagList}>
                  <li>JavaScript</li>
                  <li>Node.js</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>SCSS</li>
                  <li>Python</li>
                  <li>C</li>
                  <li>C++</li>
                  <li>CUDA</li>
                  <li>Java</li>
                </ul>
              </div>

              <div className="mt-12">
                <div className="font-serif text-4xl mb-6">
                  <span>Technologies</span>
                </div>
                <ul className={styles.tagList}>
                  <li>ReactJS</li>
                  <li>Next.js</li>
                  <li>Redux</li>
                  <li>REST API</li>
                  <li>GraphQL</li>
                  <li>Gatsby.js</li>
                  <li>Express</li>
                  <li>Tailwind CSS</li>
                  <li>Git</li>
                  <li>Bootstrap</li>
                  <li>MaterialUI</li>
                  <li>jQuery</li>
                  <li>Mongoose</li>
                  <li>Jest</li>
                  <li>Mocha</li>
                  <li>MongoDB</li>
                  <li>MySQL</li>
                  <li>Heroku</li>
                </ul>
              </div>
            </div>
          </Container>
        </section>
      </Container>
    </>
  );
};

export default Index;
