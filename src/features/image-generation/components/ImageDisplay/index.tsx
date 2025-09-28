import styles from './ImageDisplay.module.css';
import { useGenerationContext } from '@features/image-generation/context/GenerationContext/GenerationContext';
import { useQueryContext } from '@features/image-generation/context/QueryContext/QueryContext';
import { useImageLoad } from '@/features/image-generation/hooks/useImageLoad';
import { ErrorMessage, Spinner, ImageCard, PlaceholderView } from '@shared/ui';
import { formatDate } from '@utils/dateUtils';
import { ICONS } from '@constants/ui';

const ImageDisplay = () => {
  const { currentImage } = useGenerationContext();
  const { isLoading, error } = useQueryContext();
  const { isImageLoaded, hasImageError } = useImageLoad(currentImage?.imageUrl || null);
  const formattedDate = currentImage ? formatDate(currentImage.createdAt) : '';

  return (
    <div className={styles.container}>
      {(isLoading || (currentImage && !isImageLoaded && !hasImageError)) && (
        <div className={styles.imageWrapper}>
          <Spinner 
            text="Generating your image..."
            size="lg"
            variant="circle"
          />
        </div>
      )}

      {error && !isLoading && (
        <ErrorMessage 
          message={error} 
          variant="card" 
        />
      )}

      {!currentImage && !isLoading && !error && (
        <PlaceholderView 
          icon={ICONS.EMPTY}
          title="No image generated yet"
          description="Enter a prompt above to create your first AI-generated image"
          variant="default"
        />
      )}

      {currentImage && !isLoading && !error && isImageLoaded && (
        <ImageCard
          src={currentImage.imageUrl}
          alt={`Generated image: ${currentImage.prompt}`}
          title="Prompt:"
          subtitle={currentImage.prompt}
          hasError={hasImageError}
          metadata={[
            { label: 'ID', value: currentImage.id },
            { label: 'Generated', value: formattedDate }
          ]}
        />
      )}
    </div>
  );
};

export default ImageDisplay;
