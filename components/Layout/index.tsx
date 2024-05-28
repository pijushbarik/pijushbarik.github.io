import Container from "@components/Container";
import Header from "./Header";
import Footer from "./Footer";

type LayoutProps = {
  children: React.ReactNode
};

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <>
      <Container>
        <Header />
        <main>{props.children}</main>
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
