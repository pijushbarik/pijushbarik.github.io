import styles from "./styles.module.scss";
import Container from "@components/Container";
import ContactCard from "@components/ContactCard";

const Footer: React.FC<{}> = () => {
  return (
    <footer className={styles.footer}>
      <Container fluid className="flex justify-between">
        <div className="w-1/3">
          <ContactCard />
        </div>
        <div className="w-1/3">
          <ul className="flex space-x-6 font-mono">
            <li>
              <a
                className="text-secondary hover:text-primary transition-colors"
                href="https://github.com/pijushbarik"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                className="text-secondary hover:text-primary transition-colors"
                href="https://www.linkedin.com/in/pijushbarik/"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                className="text-secondary hover:text-primary transition-colors"
                href="https://twitter.com/pijushbarik"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                className="text-secondary hover:text-primary transition-colors"
                href="https://www.facebook.com/barikpijush"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
