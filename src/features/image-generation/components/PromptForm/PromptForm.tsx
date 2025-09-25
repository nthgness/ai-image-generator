import React from "react";
import styles from "./PromptForm.module.css";
import { usePromptForm } from "../../hooks";
import { Button, ErrorMessage, TextArea } from "../../../../shared/ui";

const PromptForm: React.FC = () => {
  const {
    prompt,
    handleInputChange,
    handleSubmit,
    isSubmitDisabled,
    displayError,
    isLoading,
    validation,
  } = usePromptForm();
  return (
    <div className={styles.promptFormContainer}>
      <div className={styles.description}>
        <p className={styles.formSubtitle}>
          What kind of image would you like to create?
        </p>
        <p className={styles.formHint}>
          Be specific: include subject, style, colors, setting, and mood
        </p>
      </div>
      
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <TextArea
          value={prompt}
          onChange={handleInputChange}
          disabled={isLoading}
          hasError={!!displayError}
          placeholder="Example: A majestic golden retriever sitting in a sunny meadow, photorealistic style, warm golden lighting, peaceful atmosphere"
        />
        {displayError && (
          <ErrorMessage message={displayError} id="prompt-error" />
        )}
      
        <div className={styles.validationInfo}>
          <div className={styles.characterCount}>
            <span className={styles.neutralCount}>
              {validation.characterCount}
            </span>
            /500 characters
          </div>
          {validation.warning && (
            <div className={styles.warning}>
              {validation.warning}
            </div>
          )}
        </div>
        <div className={styles.buttonWrapper}>
          <Button
            type="submit"
            disabled={isSubmitDisabled}
            isLoading={isLoading}
            ariaDescribedBy="button-status"
          />
        </div>
      </form>
    </div>
  );
};

export default PromptForm;