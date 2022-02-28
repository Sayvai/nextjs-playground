import styles from './home.module.scss';

import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link';

export interface HomePageProps {

}

const Home: NextPage = ({ }: HomePageProps) => {
  return (
    <>
      <Head>
        <title>Home | Next.js Playground</title>
      </Head>

      <section className={styles.home}>
        <div data-type="center-big">
          <p>An experimental playground of various features and capabilities, leveraging Next.JS and React 🧑🏻‍🔬</p>
          <Link href="/playground" passHref>
            <button>View Playground</button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;