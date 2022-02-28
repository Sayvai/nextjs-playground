import styles from './playground.module.scss';

import Image from 'next/image';
import Link from 'next/link';
import NewsAggregatorGif from '../../public/nextjs-playground_news-aggregator.gif';


const Playground: React.FC = () => {
  return (
    <section className={styles.playground}>
      <h2>Playground</h2>
      <p>From here, you will find a list of all the various experiemental pages associated with the personal experiemental developments.</p>
      <p>The experiments are all just based on personal research and self-development of the many capabilities provided by the Next.js framework.</p>
      <h3>Top Picks</h3>
      <ul data-type="top-picks">
        <li>
          <Link href="/playground/news-aggregator">
            <a title="News Aggregator">
              <h4>News Aggregator</h4>
              <Image src={NewsAggregatorGif} alt="Visual GIF demo of News Aggregator page" />
              <p>A server-side rendered (SSR) news aggregator feed page, which then links into an individual article summary page which in itself is statically generated (SSG)</p>
            </a>
          </Link>
        </li>
      </ul>
    </section>
  )
}

export default Playground;