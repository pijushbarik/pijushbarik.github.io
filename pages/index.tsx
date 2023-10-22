import Container from "@components/Container";
import HiThere from "@components/SVGs/HiThere";
import IAmPijush from "@components/SVGs/IAmPijush";
import styles from "./styles.module.scss";
import { NextPage } from "next";
import classNames from "@lib/helpers/classNames";
import ProjectCard from "@components/ProjectCard";
import Masonry from "react-masonry-css";
import Meta from "@components/Meta";
import CareerCard from "@components/CareerCard";

type Work = {
  coverSrc: string;
  name: string;
  link: string;
  description: string;
  tags: string[];
};

const Works: Work[] = [
  {
    name: "WellSoul",
    description:
      "Online Healthcare Service. Managing the project with it's admin submodule from scratch.",
    tags: ["Next.js", "GraphQL", "Strapi", "AntD", "TailwindCSS"],
    link: "https://wellsoul.in",
    coverSrc: "/assets/projects/wellsoul-pijush-barik.jpg",
  },
  {
    name: "AiHouse India",
    description: "AiHouse India portfolio website.",
    tags: ["Gatsby", "Chakra UI", "TailwindCSS"],
    link: "https://aihouseindia.com",
    coverSrc: "/assets/projects/aihouse-india-pijush-barik.jpg",
  },
  {
    name: "Proficient Vision Solutions",
    description: "Product showcase website",
    tags: ["HTML", "SCSS", "jQuery"],
    link: "http://proficientvisionsolutions.com/",
    coverSrc: "/assets/projects/proficientvision-pijush-barik.jpg",
  },
  {
    name: "React Calculator",
    description: "Simple calculator application made with React",
    tags: ["React", "SCSS"],
    link: "https://codepen.io/heisenberg-pb/pen/NBgPEg",
    coverSrc: "/assets/projects/calculator-pijush-barik.jpg",
  },
  {
    name: "Pomodoro Clock",
    description:
      "A simple digital clock for Pomodoro Technique time management",
    tags: ["React", "SCSS"],
    link: "https://codepen.io/heisenberg-pb/pen/NBaZGy",
    coverSrc: "/assets/projects/pomodoro-clock-pijush-barik.jpg",
  },
];

type PageProps = {};

const Index: NextPage<PageProps> = () => {
  return (
    <>
      <Meta />
      <Container>
        <section className="py-28">
          <Container fluid>
            <div>
              <HiThere className={styles.hiThere} />
              <IAmPijush className={styles.iAmPijush} />
              <p className={styles.subtitle}>
                Helping people writing quality code &amp; softwares.
              </p>
            </div>
          </Container>
        </section>

        <section id="about" className="bg-yellow-900 py-28">
          <Container fluid className="space-y-10">
            <h2 className="text-5xl font-serif font-bold mb-8">About.</h2>

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
                  Hi there. I am Pijush Barik. I am a full stack web developer.
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
                </p>

                <p className="mt-12">
                  Alongside coding I love to ride my bike, read books (mostly
                  fiction), watching crime thriller movies and TV series.
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

            <Masonry
              breakpointCols={{
                default: 2,
                1280: 2,
                1024: 2,
                768: 1,
                640: 1,
              }}
              className={styles.masonryGrid}
              columnClassName={styles.masonryGrid_column}
            >
              {Works.map((w, i) => (
                <ProjectCard key={i} {...w} />
              ))}
            </Masonry>
          </Container>
        </section>

        <section id="experience" className="bg-gray-900 py-28">
          <Container fluid className="space-y-10">
            <h2 className="text-5xl font-serif font-bold">Career.</h2>

            <div>
              <ul className={styles.experienceList}>
                <li className={styles.experienceList_item}>
                  <CareerCard
                    title="Senior Associate Consultant"
                    comapny="Infosys"
                    period="July, 2022 - Present"
                  />
                </li>

                <li className={styles.experienceList_item}>
                  <CareerCard
                    title="Associate Consultant"
                    comapny="Infosys"
                    period="May, 2022 - June, 2023"
                  />
                </li>

                <li className={styles.experienceList_item}>
                  <CareerCard
                    title="Full Stack Developer"
                    comapny="CBNITS, Kolkata"
                    period="October, 2019 - April, 2022"
                    jobDescription="Creating responsive and interactive UI with React.
                    Developing feature-rich web application on NextJS and
                    AntD. Managing and developing backend APIs with Strapi."
                  />
                </li>

                <li className={styles.experienceList_item}>
                  <CareerCard
                    title="C++ &amp; CUDA Developer"
                    comapny="Department of Electronics &amp; Electrical Communication
                    Engineering, Indian Institute of Technology, Kharagpur"
                    period="July, 2019 - September, 2019"
                    jobDescription="Developing real time, multithreaded image processing
                    application with C++, CUDA and OpenCV. Creating build
                    tools with CMAKE for easy code compilation."
                  />
                </li>

                <li className={styles.experienceList_item}>
                  <CareerCard
                    title="Project Intern"
                    comapny="Department of Electronics &amp; Electrical Communication
                    Engineering, Indian Institute of Technology, Kharagpur"
                    period="March, 2019 - June, 2019"
                    jobDescription=" Migrating Matlab prototype codebase into C++ and CUDA.
                    Worked with OpenCV for image processing. Developing
                    product showcase website."
                  />
                </li>
              </ul>
            </div>
          </Container>
        </section>

        <section id="tech-stacks" className="py-28">
          <Container fluid className="space-y-10">
            <h2 className="text-5xl font-serif font-bold">Tech Stack.</h2>

            <div>
              <div>
                <div className="font-serif text-4xl mb-6">
                  <span>Languages</span>
                </div>

                <ul className={styles.tagList}>
                  <li>TypeScript</li>
                  <li>JavaScript</li>
                  <li>SQL</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Python</li>
                  <li>C</li>
                  <li>C++</li>
                </ul>
              </div>

              <div className="mt-12">
                <div className="font-serif text-4xl mb-6">
                  <span>Technologies</span>
                </div>
                <ul className={styles.tagList}>
                  <li>ReactJS</li>
                  <li>Next.js</li>
                  <li>Gatsby</li>
                  <li>Ant Design</li>
                  <li>Material UI</li>
                  <li>Chakra UI</li>
                  <li>TailwindCSS</li>
                  <li>Bootstrap</li>
                  <li>SCSS</li>
                  <li>LESS</li>
                  <li>Redux</li>
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>REST API</li>
                  <li>GraphQL</li>
                  <li>MySQL</li>
                  <li>MongoDB</li>
                  <li>Strapi</li>
                  <li>Git</li>
                  <li>CUDA</li>
                  <li>OpenCV</li>
                  <li>AWS</li>
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
