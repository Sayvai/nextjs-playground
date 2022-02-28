import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Index.module.scss'

import Home from '../components/home/home';

const IndexPage: NextPage = (props) => {
  return (
    <>
      <Head>
        <title>Next.js - Playground</title>
        <meta name="description" content="An experimental playground for learning various features of Next.js by Sayvai Tosu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home {...props} />
    </>
  )
}

export default IndexPage;
