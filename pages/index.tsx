import Script from "next/script";
import classNames from "classnames";
import styles from "./index.module.css";
import Button from "../lib/Button";
import Animation from "../lib/Lottie/Animation";
import Footer from "../lib/Footer";
import HeaderWebsite from "../lib/HeaderWebsite";
import Head from "next/head";
import Link from "next/link";

export default () => {
  return (
    <>
      <Head>
        <title>
          ResumerX enhancer - Make your CV better with AI - Powered by OpenAI's
          GPT-3
        </title>
      </Head>

      <Script src="https://buttons.github.io/buttons.js" />

      <HeaderWebsite />

      <div className={styles.heroImage}>
        <Animation path="/animations/merge.json" speed={0.4} />
      </div>

      <div className={styles.layout}>
        <main className={styles.main}>
          <div className={classNames(styles.hero, styles.withLine)}>
            <div className={classNames(styles.heroImageBox, styles.box)}>
              <p className={styles.heroText}>Optimize your CV</p>
              <Animation path="/animations/cv.json" speed={0.2} />
            </div>

            <h1 className={styles.heroTitle}>
              Elevate your CV using{" "}
              <span className={styles.coloredText}>AI</span>
            </h1>
            <p className={styles.heroTagline}>
              Unlock your full potential with our{" "}
              <strong>AI-powered platform</strong> and let it edit your CV to
              new heights. Build on OpenAI's GPT-3 API.
              <br />
              It's 100% free. Promised.
            </p>

            <Button href="/tool">Review your CV now</Button>

            <p>
              This is a project by <Link href="/about">Hans</Link> &ndash; no
              agency or anything. <Link href="/my-data">Your data</Link> is not
              stored.
            </p>
          </div>

          <section className={classNames(styles.section, styles.withLine)}>
            <p className={styles.emphasizedHeadline}>
              <span className={styles.coloredText}>[rɪˈzuːmər'ɛks]</span>
            </p>
            <h2>
              How <span className={styles.coloredText}>ResumerX</span> works
            </h2>

            <div className={styles.grid}>
              <div className={styles.box}>
                <h3>Feed in Your CV Texts</h3>
                <p>
                  Provide the text from your current CV in ResumerX's platform.
                </p>
              </div>

              <div className={styles.box}>
                <h3>Generate Optimized Texts</h3>
                <p>
                  Optimize your CV text with AI technology. Make them shorter,
                  extend or change tone.
                </p>
              </div>

              <div className={styles.box}>
                <h3>Use Texts in Your CV</h3>
                <p>
                  Boost your CV's impact with ResumerX's optimized text. Just
                  copy and paste them into your CV.
                </p>
              </div>
            </div>

            <Button href="/tool">Try ResumerX Now</Button>

            <div
              className={classNames(styles.sectionCondensed)}
              style={{ marginBottom: 0 }}
            >
              <p>
                ResumerX specializes in creating high-quality CV content based
                on your input. The final format and design of your CV is
                completely up to you.
              </p>
            </div>
          </section>

          <section
            className={classNames(
              styles.section,
              styles.sectionCondensed,
              styles.withLine
            )}
          >
            <h2>
              Why <span className={styles.coloredText}>ResumerX</span>?
            </h2>

            <p>
              Crafting the perfect CV can be a daunting task. From highlighting
              your skills and experiences to showcasing your achievements, it
              can be challenging to make your CV stand out from the rest.
            </p>
            <p>
              We understand the importance of a well-written CV. That's why
              we've developed a free platform that uses AI technology to enhance
              the content of your CV. With the platform, you can take your CV to
              the next level and make sure your qualifications and experiences
              are effectively communicated.
            </p>
            <p>
              The platform is designed to help you make the most of your CV by
              using the power of AI technology to bring out the best in your
              text.
            </p>
          </section>

          <section
            className={classNames(styles.section, styles.sectionCondensed)}
          >
            <h2>
              <span className={styles.coloredText}>Open-Source</span> Code
            </h2>
            <p>
              The source code of ResumerX is accessible on GitHub, you are
              welcome to review, read, or contribute to it as you wish.
            </p>

            <p>
              <a
                className="github-button"
                href="https://github.com/drublic/ResumerX"
                data-icon="octicon-star"
                data-size="large"
                aria-label="Star drublic/ResumerX on GitHub"
              >
                Star
              </a>

              <span style={{ marginRight: "1rem" }} />

              <a
                className="github-button"
                href="https://github.com/drublic/ResumerX/subscription"
                data-icon="octicon-eye"
                data-size="large"
                aria-label="Watch drublic/ResumerX on GitHub"
              >
                Watch
              </a>
            </p>
          </section>
        </main>
      </div>

      <Footer />
    </>
  );
};
