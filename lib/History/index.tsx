import classNames from "classnames";
import { format, formatDistance } from "date-fns";
import styles from "./History.module.css";

const History = ({ history, onSelect }) => {
  if (history.length === 0) {
    return null;
  }

  return (
    <div
      className={classNames(styles.history, {
        [styles.historyIsVisible]: history.length > 0,
      })}
    >
      <h3>History</h3>

      <ul>
        {history &&
          history.reverse().map(({ text, timestamp, option }, index) => (
            <li
              className={styles.historyItem}
              key={index}
              onClick={() => onSelect({ text, timestamp, option })}
            >
              <p className={styles.text}>{text}</p>
              <p className={styles.textAside}>
                <span
                  className={styles.time}
                  title={format(new Date(timestamp), "dd.MM.yyyy hh:mm a")}
                >
                  {formatDistance(new Date(timestamp), Date.now())} ago
                </span>

                {option && <span className={styles.tag}>{option}</span>}
              </p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default History;
