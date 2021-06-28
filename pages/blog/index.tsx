import { NextPage } from "next";
import Container from "@components/Container";
import IArticle, { IArticleCard } from "@lib/types/article";
import { ArticleCard } from "@components/Article";
import { useEffect } from "react";
import styles from "./styles.module.scss";
import classNames from "@helpers/classNames";
import { getAllPosts } from "@lib/api";

type PageProps = {
  articles: IArticleCard[];
};

const Blog: NextPage<PageProps> = (props) => {
  useEffect(() => {
    const container = document.getElementById("articles-container");
    // @ts-ignore
    new Masonry(container, {
      itemSelector: ".article-card",
      columnWidth: ".article-card",
      percentPosition: true,
      gutter: 24,
    });
  }, []);
  console.log(props.articles);

  return (
    <>
      <Container fluid className="mt-10">
        <h1 className="text-7xl font-serif font-bold mb-8">Blog.</h1>

        <ul className="" id="articles-container">
          {props.articles.map((article) => (
            <li
              key={article.slug}
              className={classNames(styles.article_card, "article-card")}
            >
              <ArticleCard article={article} />
            </li>
          ))}
        </ul>
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
    "coverImage",
    "excerpt",
    "tags",
  ]);

  return {
    props: { articles: allPosts },
  };
};
