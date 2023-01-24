import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Copyright © {new Date().getFullYear()} Hans Reinl. All rights reserved.
      </p>

      <div className={styles.spacer} />

      <p style={{ float: "right" }}>
        <a href="https://twitter.com/drublic">Follow @drublic on Twitter</a>
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
