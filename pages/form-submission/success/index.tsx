import Link from "next/link";
import Container from "@components/Container";

const FormSuccessPage = () => (
  <>
    <Container fluid className="flex justify-center items-center mt-10 mx-auto">
      <div
        className="w-3/4 max-w-5xl px-6 py-24 rounded-lg shadow-lg text-center"
        style={{ background: "rgba(56, 161, 105, 0.2)" }}
      >
        <p className="text-7xl font-light">Form submitted!</p>
        <p className="text-3xl mt-10 leading-relaxed">
          The form has been submitted successfully. Thanks for your time!
        </p>
        <Link href="/">
          <a className="text-3xl underline mt-6 block">Home</a>
        </Link>
      </div>
    </Container>
  </>
);

export default FormSuccessPage;
