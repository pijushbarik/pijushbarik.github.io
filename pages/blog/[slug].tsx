import { NextPage } from "next";
import Container from "@components/Container";
import markdownToHtml from "@helpers/markdownToHtml";
import IArticle from "@lib/types/article";
import { ArticleBody } from "@components/Article";
import Head from "next/head";
import styles from "./styles.module.scss";
import { getAllPosts, getPostBySlug } from "@lib/api";

type PageProps = {
  article: IArticle;
};

const Article: NextPage<PageProps> = (props) => {
  console.log(props.article);
  return (
    <>
      <Head>
        <title>{props.article.title} - Pijush Barik</title>
      </Head>

      <Container fluid className="mt-10">
        <article className={styles.article}>
          <h1 className="font-serif font-bold mb-8">{props.article.title}</h1>
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
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      article: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.slug,
        },
      };
    }),
    fallback: false,
  };
}
