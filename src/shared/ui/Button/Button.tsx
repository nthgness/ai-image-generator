import React from "react";
import styles from "./Button.module.css";
import { ICONS } from "../../../constants";
import Spinner from "../Spinner/Spinner";

interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  isLoading?: boolean;
  type?: "button" | "submit" | "reset";
  ariaDescribedBy?: string;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  disabled = false,
  isLoading = false,
  type = "button",
  ariaDescribedBy,
  children,
}) => {
  const isDisabled = disabled || isLoading;

  return (
    <button
      type={type}
      className={styles.button}
      onClick={onClick}
      disabled={isDisabled}
      aria-describedby={ariaDescribedBy}
    >
      {isLoading ? (
        <>
          <Spinner variant="button" text="" />
          Generating...
        </>
      ) : (
        <>
          <span className={styles.buttonIcon}>{ICONS.GENERATE}</span>
          {children || "Generate Image"}
        </>
      )}
    </button>
  );
};

export default Button;
