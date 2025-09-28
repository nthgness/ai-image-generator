import styles from './ImageHistory.module.css';
import { useGenerationContext } from '@features/image-generation/context/GenerationContext/GenerationContext';
import { PlaceholderView, HistoryItem } from '@shared/ui';
import { formatDate } from '@utils/dateUtils';
import type { GeneratedImage } from '@types';

const ImageHistory = () => {
  const { history, selectFromHistory, currentImage } = useGenerationContext();
  

  if (history.length === 0) {
    return (
      <PlaceholderView 
        icon="🎨"
        title="No images yet"
        description="Generate your first AI image to see it here"
        variant="sidebar"
      />
    );
  }

  return (
    <div className={styles.sidebarHistory}>
      <div className={styles.historyList}>
        {history.map((image: GeneratedImage) => ( 
          <HistoryItem
            key={image.id}
            id={image.id}
            imageUrl={image.imageUrl}
            prompt={image.prompt}
            date={formatDate(image.createdAt)}
            isActive={currentImage?.id === image.id}
            onSelect={selectFromHistory}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageHistory;
