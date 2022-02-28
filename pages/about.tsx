import { NextPage } from "next";
import Head from "next/head";
import About from "../components/about/about";

const AboutPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>About | Next.js Playground</title>
      </Head>
      <About />
    </>
  );
}

export default AboutPage;