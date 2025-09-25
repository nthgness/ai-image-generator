import React from "react";
import { QueryContext } from "./QueryContext";
import { useGenerate } from "../hooks";

interface QueryProviderProps {
  children: React.ReactNode;
}

export const QueryProvider: React.FC<QueryProviderProps> = ({ children }) => {
  const queryData = useGenerate();

  return (
    <QueryContext.Provider value={queryData}>
      {children}
    </QueryContext.Provider>
  );
};
