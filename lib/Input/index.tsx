import Button from "../Button";
import Icon from "../Icon";
import Animation from "../Lottie/Animation";
import styles from "./Input.module.css";

const Input = ({
  currentSection,
  onSubmit,
  textInput,
  setTextInput,
  errorMessage,
  isLoading,
}) => {
  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <h2>
        {currentSection.section.title}
        {currentSection.child ? ` > ${currentSection.child.title}` : ""}
      </h2>

      <p>Copy your text here or write it directly into the field.</p>

      <div className={styles.wrapper} data-replicated-value={textInput}>
        <textarea
          name="chunk"
          placeholder="Add your resume text here"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          className={styles.textarea}
          maxLength={10000}
        />
      </div>

      {errorMessage && (
        <p>
          <Icon marginRight={0.5}>error</Icon>
          {errorMessage}
        </p>
      )}

      <Button type="submit" disabled={textInput.length === 0 || isLoading}>
        Generate Optimized Solution
      </Button>

      {isLoading && (
        <div className={styles.loading}>
          <Animation path="/animations/loading.json" />

          <p className={styles.loadingText}>Generating Result</p>
        </div>
      )}
    </form>
  );
};

export default Input;
