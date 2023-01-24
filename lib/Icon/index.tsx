import classNames from "classnames";
import { FunctionComponent, SyntheticEvent } from "react";

import styles from "./Icon.module.css";

const Icon: FunctionComponent<{
  variant?: "default";
  title?: string;
  className?: string;
  size?: "sm" | "md" | "default" | "lg" | "xl";
  marginRight?: number;
  onClick?: (event: SyntheticEvent) => void;
  children: React.ReactNode;
}> = ({
  variant = "default",
  title,
  marginRight,
  className,
  size,
  onClick,
  children,
}) => {
  const classes = classNames(
    "material-symbols-outlined",
    styles.icon,
    {
      [styles[`icon-${size}`]]: size,
    },
    className
  );

  return (
    <span
      className={classes}
      style={{ marginRight: marginRight ? `${marginRight}em` : undefined }}
      onClick={onClick}
      title={title}
    >
      {children}
    </span>
  );
};

export default Icon;
