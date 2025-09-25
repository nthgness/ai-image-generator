import { useState } from "react";
import type { GeneratedImage, UseImageManagerReturn } from "../../../types";

export const useImageManager = (): UseImageManagerReturn & { handleAddImage: (image: GeneratedImage) => void } => {
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
