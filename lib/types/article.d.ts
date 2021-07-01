import Author from "./author";
import { Media } from "./commons";
import Tag from "./tag";

type Article = {
  id: string;
  title: string;
  content: string;
  author: Author;
  date: string;
  slug: string;
  excerpt: string;
  coverImage: Media;
  tags: Tag[];
  meta: {
    keywords: string[];
    title: string;
    ogImage: string;
  };
};

export type IArticleCard = {
  title: string;
  excerpt: string;
  author: IAuthor;
  date: string;
  slug: string;
  tags: ITag[];
};

export default Article;
