import { NextPage } from "next";
import Container from "@components/Container";
import markdownToHtml from "@helpers/markdownToHtml";
import axios from "@lib/axios";
import IArticle from "@lib/types/article";
import { ArticleBody } from "@components/Article";
import Head from "next/head";
import styles from "./styles.module.scss";

type PageProps = {
  article: IArticle;
};

const Article: NextPage<PageProps> = props => {
  return (
    <>
      <Head>
        <script src="/assets/prism.js" defer />
        <link rel="stylesheet" href="/assets/prism.css" />
      </Head>

      <Container fluid className="mt-10">
        <article className={styles.article}>
          <ArticleBody content={props.article.content} />
        </article>
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
