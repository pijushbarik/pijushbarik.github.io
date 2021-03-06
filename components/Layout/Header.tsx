import Container from "@components/Container";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import NavigationMenu from "./NavigationMenu";

const Header: React.FC<{}> = () => {
  const [activeMenuItem, setActiveMenuItem] = useState("");

  const router = useRouter();

  useEffect(() => {
    const path = router.asPath;

    let activePath = "";

    if (path.includes("about")) activePath = "about";
    if (path.includes("works")) activePath = "works";
    if (path.includes("blog")) activePath = "blog";
    // if (path.includes("contact")) activePath = "contact";

    setActiveMenuItem(activePath);
  }, [router]);

  return (
    <header>
      <Container
        fluid
        className="flex items-center justify-between space-x-4 py-4"
      >
        <Link href="/">
          <a>
            <span className="text-4xl font-mono tracking-tighter text-ternary">
              Pijush Barik
            </span>
          </a>
        </Link>

        <NavigationMenu
          items={[
            {
              name: "Blog",
              key: "blog",
              path: "/blog",
              activeKey: activeMenuItem,
            },
            {
              name: "About Me",
              key: "about",
              path: "/#about",
              activeKey: activeMenuItem,
            },
            {
              name: "Works",
              key: "works",
              path: "/#works",
              activeKey: activeMenuItem,
            },
          ]}
        />
      </Container>
    </header>
  );
};

export default Header;
