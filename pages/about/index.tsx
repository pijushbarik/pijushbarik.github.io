import styles from "./style.module.scss";
import Container from "@components/Container";
import { NextPage } from "next";

type PageProps = {};

const AboutPage: NextPage<PageProps> = () => {
  return (
    <>
      <Container fluid className="mt-10">
        <h1 className="text-7xl font-serif font-bold mb-8">About Me.</h1>

        <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 space-x-0 md:space-x-10">
          <div className="w-full md:w-4/12">
            <img
              src="/assets/pijush-barik.jpeg"
              alt="Pijush Barik"
              className={`rounded-full shadow-lg mx-auto md:mx-0 
              ${styles.profileImg}`}
            />

            <div
              className={`flex md:flex-col justify-center items-center 
              mt-12 ${styles.socialIcons}`}
            >
              <a
                href="https://github.com/pijushbarik"
                className="mr-6 md:mr-0 md:mb-10"
              >
                <img
                  src="/assets/github.svg"
                  alt=""
                  className="h-10 sm:h-12 w-auto transition-transform duration-200 ease-out"
                />
              </a>

              <a
                href="https://codepen.io/heisenberg-pb"
                className="mr-6 md:mr-0 md:mb-10"
              >
                <img
                  src="/assets/codepen.svg"
                  alt=""
                  className="h-10 sm:h-12 w-auto transition-transform duration-200 ease-out"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/pijushbarik/"
                className="mr-6 md:mr-0 md:mb-10"
              >
                <img
                  src="/assets/linkedin.svg"
                  alt=""
                  className="h-10 sm:h-12 w-auto transition-transform duration-200 ease-out"
                />
              </a>

              <a
                href="https://twitter.com/pijushbarik"
                className="mr-6 md:mr-0 md:mb-10"
              >
                <img
                  src="/assets/twitter.svg"
                  alt=""
                  className="h-10 sm:h-12 w-auto transition-transform duration-200 ease-out"
                />
              </a>

              <a href="https://www.facebook.com/barikpijush" className="">
                <img
                  src="/assets/facebook.svg"
                  alt=""
                  className="h-10 sm:h-12 w-auto transition-transform duration-200 ease-out"
                />
              </a>
            </div>
          </div>

          <div className="w-full md:w-8/12 leading-snug">
            <h2 className="text-5xl font-serif">
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
              person who keep awake late night to fix a bug.
            </p>

            <p className="mt-12">
              Alongside coding I love to read story books, watching crime
              thriller movies and TV series. When not doing anything, I sleep. I
              sleep a lot.
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

        <div className="mt-16">
          <div className="w-full mb-5">
            <p className="text-5xl capitalize font-serif text-center">
              My Tech Stacks
            </p>
          </div>

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
    </>
  );
};

export default AboutPage;
