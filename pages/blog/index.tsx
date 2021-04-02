import { NextPage } from "next";
import Container from "@components/Container";
import IArticle, { IArticleCard } from "@lib/types/article";
import axios from "@lib/axios";
import { ArticleCard } from "@components/Article";

type PageProps = {
  articles: IArticleCard[];
};

const Blog: NextPage<PageProps> = props => {
  return (
    <>
      <Container fluid className="mt-10">
        <h1 className="text-7xl font-serif font-bold mb-8">Blog.</h1>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {props.articles.map(article => (
            <li
              key={article.slug}
              className="w-full rounded-lg bg-gray-900 p-6 shadow-lg h-96"
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

export async function getStaticProps() {
  const articles: IArticle[] = (
    await axios.get("articles?_sort=published_at:desc")
  ).data;

  return {
    props: {
      articles: articles.map(article => ({
        title: article.title,
        excerpt: article.excerpt,
        published_at: article.published_at,
        slug: article.slug,
        tags: article.tags,
      })),
    },
  };
}
