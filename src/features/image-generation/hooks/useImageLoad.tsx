import { useState, useEffect } from "react";

export const useImageLoad = (imageUrl: string | null) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [hasImageError, setHasImageError] = useState(false);

  useEffect(() => {
    if (!imageUrl) {
      setIsImageLoaded(false);
      setHasImageError(false);
      return;
    }

    setIsImageLoaded(false);
    setHasImageError(false);

    const img = new Image();

    img.onload = () => {
      setIsImageLoaded(true);
      setHasImageError(false);
    };

    img.onerror = () => {
      setIsImageLoaded(false);
      setHasImageError(true);
    };

    img.src = imageUrl;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [imageUrl]);

  return {
    isImageLoaded,
    hasImageError,
  };
};
