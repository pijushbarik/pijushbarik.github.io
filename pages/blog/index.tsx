import { NextPage } from "next";
import Container from "@components/Container";

type PageProps = {};

const Blog: NextPage<PageProps> = () => {
  return (
    <>
      <Container fluid className="mt-10">
        <h1 className="text-7xl font-serif font-bold mb-8">Blog.</h1>

        <div></div>
      </Container>
    </>
  );
};

export default Blog;
