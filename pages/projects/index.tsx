import Container from "@components/Container";
import styles from "./styles.module.scss";
import ProjectCard from "@components/ProjectCard";
import { NextPage } from "next";

type PageProps = {};

const ProjectPage: NextPage<PageProps> = () => {
  return (
    <>
      <Container fluid className="mt-10">
        <h1 className="text-7xl font-serif font-bold mb-8">
          <span>Projects.</span>
        </h1>

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
    </>
  );
};

export default ProjectPage;
