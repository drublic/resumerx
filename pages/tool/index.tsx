import Head from "next/head";
import Header from "../../lib/Header";
import { StateProvider } from "../../lib/state/StateProvider";
import Tool from "../../lib/Tool";

export default () => {
  return (
    <>
      <Head>
        <title>ResumerX - Make your CV better with AI</title>
      </Head>

      <Header />

      <StateProvider>
        <Tool />
      </StateProvider>
    </>
  );
};
