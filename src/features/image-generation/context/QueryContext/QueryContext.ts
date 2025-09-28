import { createContext, useContext } from "react";
import type { GeneratedImage } from "@types";

export interface QueryContextType {
  isLoading: boolean;
  error: string | null;
  generate: (prompt: string) => Promise<GeneratedImage>;
  clearError: () => void;
}

export const QueryContext = createContext<QueryContextType | null>(null);

export const useQueryContext = () => {
  const context = useContext(QueryContext);

  if (!context) {
    throw new Error("useQueryContext must be used within QueryProvider");
  }

  return context;
};
