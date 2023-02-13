import classNames from "classnames";
import Head from "next/head";
import styles from "./index.module.css";
import Footer from "../lib/Footer";
import HeaderWebsite from "../lib/HeaderWebsite";
import Link from "next/link";

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
          <p>
            My name is Hans. You can read more about me{" "}
            <a href="https://drublic.de/">on my website</a>.
          </p>
          <p>I do this on my own just to play around with the OpenAI API.</p>
          <p>
            This page or the service are not connected to any recruiting
            business at all.
          </p>
          <p>
            Your data is not stored with ResumerX. See{" "}
            <Link href="/my-data">What happens to the data that I enter?</Link>
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
};
