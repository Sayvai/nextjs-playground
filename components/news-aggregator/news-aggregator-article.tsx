/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import styles from './news-aggregator-article.module.scss';
import { Article } from './news-aggregator-articles';

export interface NewsAggregatorArticleProps {
  article: Article | undefined;
}

const NewsAggregatorArticle: React.FC<NewsAggregatorArticleProps> = ({ article }) => {
  if (!article) {
    return <p data-type="error-no-article">Oops. There was problem retrieiving the article..</p>
  }

  const publishedDate = new Date(article.publishedAt).toLocaleString();
  const updatedDate = new Date(article.updatedAt).toLocaleString();

  const displayedDate = publishedDate === updatedDate ? `Published on ${publishedDate}` : `Published on ${publishedDate} (updated: ${updatedDate})`

  return (
    <div className={styles['news-aggregator-article']}>
      <section>
        <small data-type="back"><Link href="/playground/news-aggregator"><a title="News Aggregator Articles">News Aggregator Articles</a></Link></small>
        <h2 data-type="title">{article.title}</h2>
        <small data-type="date">{displayedDate}</small>
        <img src={article.imageUrl} alt={`Article image: ${article.title}`} />
        <h3>Summary</h3>
        <p data-type="summary-text">{article.summary}.. <span data-type="full-article">(read the <a href={article.url} target="_blank" aria-label='Read full article' title='Read full article' rel="noopener noreferrer">full article</a>)</span></p>
      </section>
    </div>
  );
}

export default NewsAggregatorArticle;