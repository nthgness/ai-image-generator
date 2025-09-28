import { createContext, useContext } from "react";
import type { ToastContextType } from "@types";

export const ToastContext = createContext<ToastContextType | null>(null);

export const useToastContext = () => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToastContext must be used within ToastProvider");
  }

  return context;
};
