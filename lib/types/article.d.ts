import Author from "./author";
import { Media } from "./commons";
import Tag from "./tag";

type Article = {
  id: string;
  title: string;
  content: string;
  author: Author;
  published_at: string;
  slug: string;
  excerpt: string;
  cover: Media;
  tags: Tag[];
  keywords: string[];
};

export type IArticleCard = {
  title: string;
  excerpt: string;
  author: IAuthor;
  published_at: string;
  slug: string;
  tags: ITag[];
};

export default Article;
