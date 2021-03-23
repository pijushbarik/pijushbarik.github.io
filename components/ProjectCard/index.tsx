import styles from "./styles.module.scss";
import classNames from "@helpers/classNames";

type ProjectCardProps = {
  className?: string;
  style?: React.CSSProperties;
  title: string;
  src: string;
  alt: string;
  description: string;
  link: string;
  tags: string[];
};

const ProjectCard: React.FC<ProjectCardProps> = props => {
  return (
    <div
      className={classNames(styles.projectCard, props.className)}
      style={props.style || {}}
    >
      <div className={`ml-12 ${styles.projectCard__header}`}>
        <h2 className="font-mono text-2xl">{props.title}</h2>
      </div>

      <img
        className={styles.projectCard__img}
        src={props.src}
        alt={props.alt}
      />
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={props.link}
        className={styles.projectCard__link}
      >
        <img src="/assets/icon-eye.png" alt="" />
      </a>
      <div className={`ml-12 ${styles.projectCard__footer}`}>
        <p className={`text-xl ${styles.projectCard__description}`}>
          {props.description}
        </p>
        <div className="mt-4">
          {props.tags.map(tag => (
            <span className={styles.projectCard__tag} key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
