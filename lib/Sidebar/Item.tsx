import classNames from "classnames";
import Icon from "../Icon";
import styles from "./Sidebar.module.css";

const Item = ({ onClick, onDelete, isSelected, title, id }) => {
  return (
    <div
      onClick={onClick}
      className={classNames(styles.listItem, {
        [styles.listItemIsSelected]: isSelected,
      })}
    >
      {title}

      <Icon className={styles.deleteIcon} onClick={onDelete}>
        delete
      </Icon>
    </div>
  );
};

export default Item;
