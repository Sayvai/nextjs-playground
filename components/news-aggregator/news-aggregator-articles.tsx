/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import styles from './news-aggregator-articles.module.scss';

export interface Article {
  id: number;
  title: string;
  url: string;
  imageUrl: string,
  newsSite: string;
  summary: string;
  publishedAt: string, // ISO date string format
  updatedAt: string, // ISO date string format
  featured: boolean,
  launches: Array<{
    id: string;
    provider: string;
  }>,
  events: Array<unknown>
}

export interface NewsAggregatorArticlesProps {
  articles: Article[];
}

const NewsAggregator: React.FC<NewsAggregatorArticlesProps> = ({ articles = [] }) => {

  const renderArticles = () => {
    if (!articles.length) {
      return <p>Unable to retrieve articles...</p>
    }

    return (
      <ul>
        {articles.map((article) => {
          const updatedDate = new Date(article.updatedAt).toLocaleString();

          return (
            <li key={article.id}>
              <Link href={`/playground/news-aggregator/${article.id}`}>
                <a>
                  <h4>{article.title}</h4>
                  <img src={article.imageUrl} alt={`Article image: ${article.title}`} />
                  <p>{article.summary}</p>
                  <small><span>Updated:</span> {updatedDate}</small>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className={styles['news-aggregator']}>
      <section>
        <h2>News Aggregator</h2>
        <p>This is a server-side rendered (SSR) news aggregator feed page, which then links into an individual article summary page, which in itself is statically generated (SSG)</p>
        <p>The feed is sourced from a live public external API feed from <a href="https://www.spaceflightnewsapi.net/" target="_blank" rel="noopener noreferrer" title="External site: Spaceflight News API" aria-label="External site: Spaceflight News API" >Spaceflight News API</a></p>
        {renderArticles()}
      </section>
    </div>
  )
}

export default NewsAggregator;