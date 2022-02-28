import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head"
import NewsAggregatorArticle, { NewsAggregatorArticleProps } from "../../../components/news-aggregator/news-aggregator-article";
import { Article } from "../../../components/news-aggregator/news-aggregator-articles";

interface Paths {
  params: {
    id: string;
  },
}

export const getStaticPaths = async () => {
  let paths: Paths[] = [];

  try {
    const res = await fetch('https://api.spaceflightnewsapi.net/v3/articles');
    const data: Article[] = await res.json();

    paths = data.map<Paths>((article) => {
      return {
        params: { id: article.id.toString() },
      }
    });
  } catch {
    console.error('Failed to retrieve articles data');
  } finally {
    return {
      paths,
      fallback: false,
    }
  }
};

export const getStaticProps: GetStaticProps<NewsAggregatorArticleProps> = async ({ params }) => {
  const id = params?.id;

  let data = [];

  try {
    const res = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${id}`);
    data = await res.json();
  } catch {
    console.error('Failed to retrieve articles data');
  } finally {
    return {
      props: {
        article: data,
      },
    }
  }
}

const NewsAggregatorArticlePage: NextPage<NewsAggregatorArticleProps> = ({ article }) => {
  return (
    <>
      <Head>
        <title>News Article | Next.js Playground</title>
      </Head>
      <NewsAggregatorArticle article={article}/>
    </>
  );
};

export default NewsAggregatorArticlePage;