import styles from "./styles.module.scss";
import Container from "@components/Container";

const Footer: React.FC<{}> = () => {
  return (
    <footer className={styles.footer}>
      <Container fluid className="flex justify-center">
        <ul className="grid grid-cols-5 grid-rows-1 gap-2 md:gap-4 lg:gap-6 justify-center">
          <li className="flex justify-center">
            <a
              className="p-2 rounded-full bg-white transition-colors inline-block"
              href="https://github.com/pijushbarik"
            >
              <img
                src="/assets/github.svg"
                alt="GitHub profile link"
                height="64px"
                width="64px"
                className="h-6 w-6"
              />
            </a>
          </li>
          <li className="flex justify-center">
            <a
              className="p-2 rounded-full bg-white transition-colors inline-block"
              href="https://codepen.io/heisenberg-pb"
            >
              <img
                src="/assets/codepen.svg"
                alt="Codepen profile link"
                height="64px"
                width="64px"
                className="h-6 w-6"
              />
            </a>
          </li>
          <li className="flex justify-center">
            <a
              className="p-2 rounded-full bg-white transition-colors inline-block"
              href="https://www.linkedin.com/in/pijushbarik/"
            >
              <img
                src="/assets/linkedin.svg"
                alt="LinkedIn profile link"
                height="64px"
                width="64px"
                className="h-6 w-6"
              />
            </a>
          </li>
          <li className="flex justify-center">
            <a
              className="p-2 rounded-full bg-white transition-colors inline-block"
              href="https://twitter.com/pijushbarik"
            >
              <img
                src="/assets/twitter.svg"
                alt="Twitter profile link"
                height="64px"
                width="64px"
                className="h-6 w-6"
              />
            </a>
          </li>
          <li className="flex justify-center">
            <a
              className="p-2 rounded-full bg-white transition-colors inline-block"
              href="https://www.facebook.com/barikpijush"
            >
              <img
                src="/assets/facebook.svg"
                alt="Facebook profile link"
                height="64px"
                width="64px"
                className="h-6 w-6"
              />
            </a>
          </li>
        </ul>
      </Container>

      <p className="text-center mt-16 mb-0 text-xs font-light">
        Handcrafted with <span className="text-red-600">❤️</span> by me. Source
        code on{" "}
        <a
          href="https://github.com/pijushbarik/pijushbarik.github.io"
          className="underline text-secondary"
        >
          GitHub
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
