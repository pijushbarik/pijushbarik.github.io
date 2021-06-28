import Meta from "@components/Meta";
import Container from "@components/Container";
import Header from "./Header";
import Footer from "./Footer";

type LayoutProps = {};

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <>
      <Meta />

      <Container>
        <Header />
        <main>{props.children}</main>
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
