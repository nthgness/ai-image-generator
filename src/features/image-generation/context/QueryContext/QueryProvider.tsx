import React from "react";
import { QueryContext } from "./QueryContext";
import { useGenerateImage } from "@features/image-generation/hooks/useGenerateImage";

interface QueryProviderProps {
  children: React.ReactNode;
}

export const QueryProvider = ({ children }: QueryProviderProps) => {
  const queryData = useGenerateImage();

  return (
    <QueryContext.Provider value={queryData}>
      {children}
    </QueryContext.Provider>
  );
};