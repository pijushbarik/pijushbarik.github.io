import styles from "./styles.module.scss";
import Container from "@components/Container";
import ContactCard from "@components/ContactCard";

const Footer: React.FC<{}> = () => {
  return (
    <footer className={styles.footer}>
      <Container fluid className="flex justify-between">
        <div className="w-1/4">
          <ContactCard />
        </div>
        <div className="w-1/4">social</div>
      </Container>
    </footer>
  );
};

export default Footer;
