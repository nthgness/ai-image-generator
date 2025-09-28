import { useState } from "react";
import { generateImageAPI } from "@services/generateImage";
import { useToastContext } from "@features/image-generation/context/ToastContext/ToastContext";
import type { GeneratedImage } from "@types";

export const useGenerateImage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { showSuccess, showError } = useToastContext();

  const generate = async (rawPrompt: string): Promise<GeneratedImage> => {
    const prompt = rawPrompt.trim();
  
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await generateImageAPI(prompt);
      showSuccess("Image generated successfully!");
      return result;
    } catch (e) {
      const errorMessage = (e as Error).message;
      setError(errorMessage);
      showError(`Generation error: ${errorMessage}`);
      throw new Error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const clearError = (): void => {
    setError(null);
  };

  return {
    isLoading,
    error,
    generate,
    clearError,
  };
};
