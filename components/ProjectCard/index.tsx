import styles from "./styles.module.scss";
import classNames from "@helpers/classNames";

type ProjectCardProps = {
  className?: string;
  style?: React.CSSProperties;
  name: string;
  coverSrc: string;
  description: string;
  link: string;
  tags: string[];
};

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  return (
    <div
      className={styles.projectCard}
      style={{
        backgroundImage: `linear-gradient(
          to top, rgba(0, 0, 0, 1),
          rgba(0, 0, 0, 0.8) 40%,
          rgba(0,0,0,0.7) 60%,
          transparent 85%
        ), url(${props.coverSrc})`,
      }}
    >
      <a
        target="_blank"
        rel="noopener noreferrer"
        className={styles.projectCard_visitLink}
        href={props.link}
      >
        View
      </a>
      <h3 className="text-5xl font-extralight">{props.name}</h3>
      <p>{props.description}</p>
      <ul className={styles.projectCard_tags}>
        {props.tags.map((tag) => (
          <li>{tag}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectCard;
