import Link from "next/link";
import Script from "next/script";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Script src="https://platform.twitter.com/widgets.js" />

      <p>
        Copyright © {new Date().getFullYear()} Hans Reinl. All rights reserved.
      </p>

      <div className={styles.spacer} />

      <p style={{ float: "right" }}>
        <span style={{ marginRight: "1rem" }}>
          <a
            href="https://twitter.com/intent/tweet?&ref_src=twsrc%5Etfw"
            className="twitter-hashtag-button"
            data-size="large"
            data-dnt="true"
            data-show-count="false"
          >
            Tweet
          </a>
        </span>

        <a
          href="https://twitter.com/drublic?ref_src=twsrc%5Etfw"
          className="twitter-follow-button"
          data-size="large"
          data-dnt="true"
          data-show-count="false"
        >
          Follow @drublic on Twitter
        </a>
      </p>

      <div className={styles.menu}>
        <ul>
          <li>
            <Link href="/my-data">What happens to my data?</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/imprint">Imprint</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
