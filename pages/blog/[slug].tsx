import { NextPage } from "next";
import Container from "@components/Container";
import markdownToHtml from "@helpers/markdownToHtml";
import IArticle from "@lib/types/article";
import { ArticleBody } from "@components/Article";
import Head from "next/head";
import styles from "./styles.module.scss";
import { getAllPosts, getPostBySlug } from "@lib/api";
import { formatDistanceToNow } from "date-fns";

type PageProps = {
  article: IArticle;
};

const Article: NextPage<PageProps> = (props) => {
  console.log(props);
  return (
    <>
      <Head>
        <title>{props.article.title} | Blog - Pijush Barik</title>
      </Head>

      <Container fluid className="mt-10 pb-28">
        <article className={styles.article}>
          <h1 className="font-serif font-bold mb-8">{props.article.title}</h1>

          <div className={styles.article_meta}>
            <img
              src={props.article.author.picture}
              alt={props.article.author.name}
            />
            <div>
              <span>{props.article.author.name}</span>
              <span className="text-gray-400 text-sm">
                {formatDistanceToNow(new Date(props.article.date))} ago
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <img
              src={props.article.coverImage.url}
              alt={props.article.coverImage.alt}
            />
            <span
              className="text-sm text-gray-300"
              dangerouslySetInnerHTML={{
                __html: props.article.coverImage.title,
              }}
            />
          </div>

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
