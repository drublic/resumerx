import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.coloredText}>ResumerX</h1>
      <p>Make your CV better with AI - Powered by OpenAI's GPT-3</p>
    </header>
  );
};

export default Header;
