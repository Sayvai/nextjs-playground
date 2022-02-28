import { NextPage } from "next";
import Head from "next/head";
import DevTips from "../components/dev-tips/dev-tips";

const DevTipsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dev Tips | Next.js Playground</title>
      </Head>
      <DevTips />
    </>
  );
}

export default DevTipsPage;