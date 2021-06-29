import { NextPage } from "next";
import Container from "@components/Container";
import { IArticleCard } from "@lib/types/article";
import { ArticleCard } from "@components/Article";
import styles from "./styles.module.scss";
import classNames from "@helpers/classNames";
import { getAllPosts } from "@lib/api";
import Masonry from "react-masonry-css";
import Head from "next/head";

type PageProps = {
  articles: IArticleCard[];
};

const Blog: NextPage<PageProps> = (props) => {
  return (
    <>
      <Head>
        <title>Blog - Pijush Barik</title>
      </Head>

      <Container fluid className="mt-10 pb-28">
        <h1 className="text-7xl font-serif font-bold mb-8">Blog.</h1>

        <Masonry
          breakpointCols={{
            default: 3,
            1280: 3,
            1024: 2,
            768: 1,
            640: 1,
          }}
          className={styles.masonryGrid}
          columnClassName={styles.masonryGrid_column}
        >
          {props.articles.map((article) => (
            <div key={article.slug} className={classNames(styles.article_card)}>
              <ArticleCard article={article} />
            </div>
          ))}
        </Masonry>
      </Container>
    </>
  );
};

export default Blog;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "excerpt",
    "tags",
  ]);

  return {
    props: { articles: allPosts },
  };
};
