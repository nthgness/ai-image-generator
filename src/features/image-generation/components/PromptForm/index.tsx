import styles from "./PromptForm.module.css";
import { usePromptForm } from "@features/image-generation/hooks/usePromptForm";
import Button from "@shared/ui/Button";
import Input from "@shared/ui/Input";
import { ICONS } from "@constants/ui";

const PromptForm = () => {
  const {
    prompt,
    handleInputChange,
    handleKeyDown,
    handleSubmit,
    isSubmitDisabled,
    displayError,
    isLoading,
  } = usePromptForm();

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <div className={styles.inputContainer}>
          <Input
            type="text"
            value={prompt}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            disabled={isLoading}
            hasError={!!displayError}
            placeholder="Describe the image you want to generate..."
            className={styles.input}
          />
          <Button
            type="submit"
            disabled={isSubmitDisabled}
            isLoading={isLoading}
          >
            <span className={styles.buttonIcon}>{ICONS.GENERATE}</span>
            <span>Generate image</span>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PromptForm;
