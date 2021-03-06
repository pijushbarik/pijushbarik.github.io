import { NextPage } from "next";
import Container from "@components/Container";
import markdownToHtml from "@helpers/markdownToHtml";
import IArticle from "@lib/types/article";
import { ArticleBody } from "@components/Article";
import styles from "./styles.module.scss";
import { getAllPosts, getPostBySlug } from "@lib/api";
import { formatDistanceToNow } from "date-fns";
import Meta from "@components/Meta";

type PageProps = {
  article: IArticle;
};

const Article: NextPage<PageProps> = (props) => {
  return (
    <>
      <Meta
        title={`${props.article.meta.title} | Blog`}
        keywords={props.article.meta.keywords}
        ogImage={props.article.meta.ogImage}
      />

      <Container fluid className="mt-10 pb-28">
        <article className={styles.article}>
          <h1 className="font-serif font-bold mb-8">{props.article.title}</h1>

          <div className={styles.article_meta}>
            <img
              src={props.article.author.picture}
              alt={props.article.author.name}
            />
            <div>
              <div className="flex items-center space-x-2">
                <span>{props.article.author.name}</span>
                <a
                  href={`https://twitter.com/${props.article.author.twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.article_meta_link}
                >
                  @{props.article.author.twitter}
                </a>
              </div>
              <time
                dateTime={props.article.date}
                className="text-gray-400 text-sm"
              >
                {formatDistanceToNow(new Date(props.article.date))} ago
              </time>
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
    "coverImage",
    "meta",
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
