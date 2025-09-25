import React from 'react';
import { GenerationContext } from './GenerationContext';
import { useImageManager } from "../hooks";

interface GenerationProviderProps {
  children: React.ReactNode;
}

export const GenerationProvider: React.FC<GenerationProviderProps> = ({ children }) => {
  const generationData = useImageManager();

  return (
    <GenerationContext.Provider value={generationData}>
      {children}
    </GenerationContext.Provider>
  );
};