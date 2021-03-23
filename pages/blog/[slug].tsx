import { NextPage } from "next";
import { useRouter } from "next/router";
import Container from "@components/Container";
import markdownToHtml from "@helpers/markdownToHtml";
import axios from "@lib/axios";
import IArticle from "@lib/types/article";

type PageProps = {
  article: IArticle;
};

const Article: NextPage<PageProps> = props => {
  const router = useRouter();

  return (
    <>
      <Container fluid className="mt-10">
        <h1 className="text-7xl font-serif font-bold mb-8">Blog title.</h1>

        <p>{JSON.stringify(props.article)}</p>
      </Container>
    </>
  );
};

export default Article;

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const article: IArticle = (await axios.get(`articles?slug=${params.slug}`))
    .data[0];

  const content = await markdownToHtml(article.content || "");

  return {
    props: {
      article: {
        ...article,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const articles: IArticle[] = (await axios.get("articles")).data;

  return {
    paths: articles.map(article => ({
      params: {
        slug: article.slug,
      },
    })),
    fallback: false,
  };
}
