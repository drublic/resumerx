import Header from "../../lib/Header";
import { StateProvider } from "../../lib/state/StateProvider";
import Preview from "../../lib/Preview";
import Head from "next/head";

export default () => {
  return (
    <>
      <Head>
        <title>ResumerX - Make your CV better with AI</title>
      </Head>

      <Header />

      <StateProvider>
        <Preview />
      </StateProvider>
    </>
  );
};
