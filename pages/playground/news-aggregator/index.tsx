import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import NewsAggregatorArticles, { NewsAggregatorArticlesProps } from "../../../components/news-aggregator/news-aggregator-articles";

export const getServerSideProps: GetServerSideProps<NewsAggregatorArticlesProps> = async () => {
  let data = [];

  try {
    const res = await fetch('https://api.spaceflightnewsapi.net/v3/articles');
    data = await res.json();
  } catch {
    console.error('Failed to retrieve articles data');
  } finally {
    return {
      props: {
        articles: data,
      },
    }
  }
}

const NewsAggregatorArticlesPage: NextPage<NewsAggregatorArticlesProps> = ({ articles }) => {
  return (
    <>
      <Head>
        <title>Playground | News Agrregator | Next.js Playground</title>
      </Head>
      <NewsAggregatorArticles articles={articles} />
    </>
  );
}

export default NewsAggregatorArticlesPage;