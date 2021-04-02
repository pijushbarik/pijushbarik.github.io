import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import { IArticleCard } from "@lib/types/article";

type ArticleCardProps = {
  article: IArticleCard;
};

const ArticleCard: React.FC<ArticleCardProps> = props => {
  return (
    <Link href={`/blog/${props.article.slug}`}>
      <a className="h-full flex flex-col justify-between space-y-4">
        <div className="flex flex-col">
          <h2 className="text-3xl line-clamp-4 leading-7">
            {props.article.title}
          </h2>

          <p className="line-clamp-4 mt-4 leading-5">{props.article.excerpt}</p>
        </div>

        <div className="flex flex-col">
          <ul className="line-clamp-2">
            {props.article.tags.map(tag => (
              <li
                className="mr-2 mb-2 bg-ternary30 py-1 px-2 rounded-sm inline-block text-sm"
                key={tag.name}
              >
                {tag.name}
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-between space-x-4">
            <span className="text-gray-500 text-sm">
              {formatDistanceToNow(new Date(props.article.published_at))} ago
            </span>
            <span className="text-secondary">View Post {"->"}</span>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default ArticleCard;
