import Link from "next/link";
import Container from "@components/Container";

const FormFailurePage = () => (
  <>
    <Container fluid className="flex justify-center items-center mt-10 mx-auto">
      <div
        className="w-3/4 max-w-5xl px-10 py-24 rounded-lg shadow-lg text-center"
        style={{ background: "rgba(229, 62, 62, 0.2)" }}
      >
        <p className="text-7xl font-light">Unable to submit</p>
        <p className="text-3xl mt-10 leading-relaxed">
          There was a problem while submitting your form. Check your internet
          connection and try again.
        </p>
        <Link href="/">
          <a className="text-3xl underline mt-6 block">Go back...</a>
        </Link>
      </div>
    </Container>
  </>
);

export default FormFailurePage;
