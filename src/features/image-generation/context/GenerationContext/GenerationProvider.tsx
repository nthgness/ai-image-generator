import React from 'react';
import { GenerationContext } from './GenerationContext';
import { useImageManager } from "@features/image-generation/hooks/useImageManager";

interface GenerationProviderProps {
  children: React.ReactNode;
}

export const GenerationProvider = ({ children }: GenerationProviderProps) => {
  const generationData = useImageManager();

  return (
    <GenerationContext.Provider value={generationData}>
      {children}
    </GenerationContext.Provider>
  );
};