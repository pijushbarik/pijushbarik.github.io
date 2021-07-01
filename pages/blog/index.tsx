import { NextPage } from "next";
import Container from "@components/Container";
import { IArticleCard } from "@lib/types/article";
import { ArticleCard } from "@components/Article";
import styles from "./styles.module.scss";
import classNames from "@helpers/classNames";
import { getAllPosts } from "@lib/api";
import Masonry from "react-masonry-css";
import Meta from "@components/Meta";

type PageProps = {
  articles: IArticleCard[];
};

const Blog: NextPage<PageProps> = (props) => {
  return (
    <>
      <Meta title="Blog" />

      <Container fluid className="mt-10 pb-28 space-y-8">
        <h1 className="text-7xl font-serif font-bold">Blog.</h1>

        <div className="space-y-2 max-w-3xl">
          <p>
            Hello. Wellcome to my blog. This is a casual tech &amp; programming
            related blog and I am writing this blog as a memoir or like a diary.
            I will mostly write here to keep note of problems and solutions I
            face while writing code. Also this was a dream project of mine to
            setup and write a blog of mine from start of my coding journey. I am
            not a professional writer or blogger, so I hope along the way this
            will improve my writing skills too.
          </p>

          <p>So, let's do it!</p>
        </div>

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
