import Container from "@components/Container";
import classNames from "@lib/helpers/classNames";
import Link from "next/link";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useMediaQuery from "@hooks/useMediaQuery";

const Header: React.FC<{}> = () => {
  const [activeMenuItem, setActiveMenuItem] = useState("");
  const [showMenuDrawer, setShowMenuDrawer] = useState(false);

  const router = useRouter();

  const showMobileMenu = useMediaQuery<boolean>(
    ["(max-width: 768px)"],
    [true],
    false
  );

  useEffect(() => {
    const path = router.asPath;

    let activePath = "";

    if (path.includes("/about")) activePath = "about";
    if (path.includes("/projects")) activePath = "projects";
    if (path.includes("/blog")) activePath = "blog";

    setActiveMenuItem(activePath);
  }, [router]);

  return (
    <header>
      <Container fluid className="flex items-center justify-between py-4">
        <Link href="/">
          <a>
            <span className="text-4xl font-mono tracking-tighter text-ternary">
              Pijush Barik
            </span>
          </a>
        </Link>

        {showMobileMenu ? (
          <div className={styles.navigation}>
            <input
              type="checkbox"
              id="navi-toggle"
              className={styles.navigation__checkbox}
            />
            <label htmlFor="navi-toggle" className={styles.navigation__button}>
              <span className={styles.navigation__icon}>&nbsp;</span>
            </label>
            <div className={styles.navigation__background}>&nbsp;</div>
            <nav className={styles.navigation__nav}>
              <ul className={styles.navigation__list}>
                <li className={styles.navigation__item}>
                  <a href="#" className={styles.navigation__link}>
                    Blog
                  </a>
                </li>
                <li className={styles.navigation__item}>
                  <a href="#" className={styles.navigation__link}>
                    Projects
                  </a>
                </li>
                <li className={styles.navigation__item}>
                  <a href="#" className={styles.navigation__link}>
                    About Me
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        ) : (
          <nav>
            <ul className="flex space-x-2 text-ternary font-mono tracking-tighter">
              <li>
                <Link href="/blog">
                  <a
                    className={classNames(
                      styles.linkBtn,
                      activeMenuItem === "blog" && styles.active
                    )}
                  >
                    Blog
                  </a>
                </Link>
              </li>

              <li>
                <Link href="/projects">
                  <a
                    className={classNames(
                      styles.linkBtn,
                      activeMenuItem === "projects" && styles.active
                    )}
                  >
                    Projects
                  </a>
                </Link>
              </li>

              <li>
                <Link href="/about">
                  <a
                    className={classNames(
                      styles.linkBtn,
                      activeMenuItem === "about" && styles.active
                    )}
                  >
                    About Me
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </Container>
    </header>
  );
};

export default Header;
