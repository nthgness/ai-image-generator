import { useState } from "react";
import type { GeneratedImage, ImageManagerType } from "@types";

export const useImageManager = (): ImageManagerType => {
  const [currentImage, setCurrentImage] = useState<GeneratedImage | null>(null);
  const [history, setHistory] = useState<GeneratedImage[]>([]);

  const handleAddImage = (image: GeneratedImage): void => {
    setCurrentImage(image);
    setHistory(prev => [image, ...prev]);
  };

  const selectFromHistory = (id: string): void => {
    const found = history.find(i => i.id === id);
    if (found) setCurrentImage(found);
  };

  const clearHistory = (): void => {
    setHistory([]);
    setCurrentImage(null);
  };

  return {
    currentImage,
    history,
    selectFromHistory,
    clearHistory,
    handleAddImage,
  };
}
