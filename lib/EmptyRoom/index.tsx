import Icon from "../Icon";
import styles from "./EmptyRoom.module.css";

const EmptyRoom = () => {
  return (
    <div className={styles.root}>
      <h2>
        <Icon size="xl">line_start_circle</Icon> Getting Started{" "}
        <Icon size="xl">line_end_arrow</Icon>
      </h2>

      <p>Follow these steps to get started.</p>

      <ol className={styles.list}>
        <li>Select a CV section on the left or create your own.</li>
        <li>Enter your information in the input field.</li>
        <li>Click the "Generate Optimized Solution" button.</li>
        <li>
          Copy the optimized version to your clipboard or continue optimizing.
        </li>
        <li>Repeat steps 1-4 for each section.</li>
      </ol>

      <p>🎉 You are good to roll.</p>
    </div>
  );
};

export default EmptyRoom;
