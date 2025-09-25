import React from "react";
import styles from "./TextArea.module.css";

interface TextAreaProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: () => void;
  disabled?: boolean;
  hasError?: boolean;
  placeholder?: string;
}

const TextArea: React.FC<TextAreaProps> = ({
  value,
  onChange,
  onBlur,
  disabled = false,
  hasError = false,
  placeholder = "Enter a detailed description of the image you want to create...",
}) => {
  return (
    <div className={styles.inputGroup}>
      <textarea
        className={`${styles.textarea} ${hasError ? styles.textareaError : ''}`}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        disabled={disabled}
        rows={4}
      />
    </div>
  );
};

export default TextArea;