import classNames from "classnames";
import Link from "next/link";
import Button from "../Button";
import styles from "./HeaderWebsite.module.css";

const HeaderWebsite = ({ withButton = true }) => {
  return (
    <header className={styles.header}>
      <Link href="/" className={classNames(styles.logo, styles.coloredText)}>
        ResumerX
      </Link>

      <div className={styles.spacer} />

      {withButton && (
        <div>
          <Button href="/tool" variant="outline">
            Start Now
          </Button>
        </div>
      )}
    </header>
  );
};

export default HeaderWebsite;
