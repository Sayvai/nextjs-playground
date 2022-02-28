import { NextPage } from "next";
import Head from "next/head";
import Playground from "../../components/playground/playground";

const PlaygroundPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Playground | Next.js PLayground</title>
      </Head>
      <Playground/>
    </>
  );
}

export default PlaygroundPage;