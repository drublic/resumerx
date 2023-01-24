import classNames from "classnames";
import Head from "next/head";
import styles from "./index.module.css";
import Footer from "../lib/Footer";
import HeaderWebsite from "../lib/HeaderWebsite";

export default () => {
  return (
    <>
      <Head>
        <title>
          About - ResumerX enhancer - Make your CV better with AI - Powered by
          OpenAI's GPT-3
        </title>
      </Head>

      <HeaderWebsite withButton={false} />

      <main className={classNames(styles.main, styles.fullPage)}>
        <h1>About ResumerX</h1>

        <section className={styles.sections} style={{ textAlign: "left" }}>
          …
        </section>
      </main>

      <Footer />
    </>
  );
};
