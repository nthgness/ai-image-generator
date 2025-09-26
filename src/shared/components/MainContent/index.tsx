import styles from "./MainContent.module.css";
import ImageDisplay from "@features/image-generation/components/ImageDisplay";
import PromptForm from "@features/image-generation/components/PromptForm";

const MainContent = () => {
  return (
    <div className={styles.mainContent}>
      <div className={styles.imageSection}>
        <ImageDisplay />
      </div>
      <div className={styles.promptSection}>
        <PromptForm />
      </div>
    </div>
  );
};

export default MainContent;
