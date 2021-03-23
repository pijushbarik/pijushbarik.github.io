import Author from "./author";
import { Media } from "./commons";

type Article = {
  id: string;
  title: string;
  content: string;
  author: Author;
  published_at: string;
  slug: string;
  excerpt: string;
  cover: Media;
};

export default Article;
