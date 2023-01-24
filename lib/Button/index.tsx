import { FunctionComponent } from "react";
import classNames from "classnames";
import Link, { LinkProps } from "next/link";

import styles from "./Button.module.css";

type GeneralButtonProps = {
  className?: string;
  variant?: "default" | "outline" | "flat";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
};

type LinkButton = GeneralButtonProps & LinkProps;
type Button = GeneralButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonProps = LinkButton | Button;

const isAnchor = (props): props is LinkButton => {
  return (props as any).href !== undefined;
};

const Button: FunctionComponent<ButtonProps> = (props) => {
  const { children, className, size = "md", variant = "default" } = props;
  const classes = classNames(
    styles.button,
    {
      [styles.outline]: variant === "outline",
      [styles.flat]: variant === "flat",
      [styles.sm]: size === "sm",
      [styles.lg]: size === "lg",
    },
    className
  );

  if (isAnchor(props)) {
    return (
      <Link href={props.href} {...props} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button {...props} className={classes}>
      {children}
    </button>
  );
};

export default Button;
