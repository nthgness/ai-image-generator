import { useState } from "react";
import { generateImageAPI } from "../../../services/generateImage";
import type { GeneratedImage } from "../../../types";

export const useGenerate = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const generate = async (rawPrompt: string): Promise<GeneratedImage | null> => {
    const prompt = rawPrompt.trim();
  
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await generateImageAPI(prompt);
      return result;
    } catch (e) {
      setError((e as Error).message);
      return null;
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
