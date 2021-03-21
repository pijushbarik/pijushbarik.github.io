import { NextPage } from "next";
import { useRouter } from "next/router";

type PageProps = {};

const Article: NextPage<PageProps> = props => {
  const router = useRouter();

  return <p>{router.query.slug}</p>;
};

export default Article;
