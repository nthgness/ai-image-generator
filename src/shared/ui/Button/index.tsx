import React from "react";
import styles from "./Button.module.css";
import Spinner from "@shared/ui/Spinner";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  children?: React.ReactNode;
}

const Button = ({
  isLoading = false,
  children,
  disabled = false,
  className,
  ...nativeProps
}: ButtonProps) => {
  const isDisabled = disabled || isLoading;

  return (
    <button
      {...nativeProps}
      className={clsx(styles.button, className)}
      disabled={isDisabled}
    >
      {isLoading ? (
        <>
          <Spinner variant="button" text="" />
        </>
      ) : (
        <>
          {children || "Generate Image"}
        </>
      )}
    </button>
  );
};

export default Button;
