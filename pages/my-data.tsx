import classNames from "classnames";
import Head from "next/head";
import styles from "./index.module.css";
import Footer from "../lib/Footer";
import Link from "next/link";
import HeaderWebsite from "../lib/HeaderWebsite";

export default () => {
  return (
    <>
      <Head>
        <title>
          Data - ResumerX enhancer - Make your CV better with AI - Powered by
          OpenAI's GPT-3
        </title>
      </Head>

      <HeaderWebsite withButton={false} />

      <main className={classNames(styles.main, styles.fullPage)}>
        <h1>What happens to the data that I enter?</h1>

        <section className={styles.sections} style={{ textAlign: "left" }}>
          <p>
            We don't store them on our servers. We submit them to Open AI's API.
            What they do with it you can read here.
          </p>

          <p>
            The important message is: We care about your data and we will not
            share it other than stated.
          </p>

          <p>
            If you have any questions, please reach out in our{" "}
            <Link href="https://github.com/drublic/resumerx/issues">
              issues
            </Link>{" "}
            or via mail to{" "}
            <Link href="mailto:info@drublic.de">info@drublic.de</Link>.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
};
