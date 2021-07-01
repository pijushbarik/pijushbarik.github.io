import Container from "@components/Container";

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
