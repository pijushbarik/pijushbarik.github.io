import Container from "@components/Container";
import styles from "./styles.module.scss";

const Header: React.FC<{}> = () => {
  return (
    <header>
      <Container fluid className="flex items-center justify-between py-4">
        <span className="text-4xl font-mono tracking-tighter text-ternary">
          Pijush Barik
        </span>
      </Container>
    </header>
  );
};

export default Header;
