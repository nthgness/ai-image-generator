import React from "react";
import clsx from 'clsx';
import styles from "./Input.module.css";

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  hasError?: boolean;
}

const Input = ({
  onChange,
  hasError = false,
  placeholder = "Enter text...",
  ...nativeProps
}: InputProps) => {
  return (
    <div className={styles.inputGroup}>
      <input
        {...nativeProps}
        className={clsx(styles.input, { [styles.inputError]: hasError })}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
