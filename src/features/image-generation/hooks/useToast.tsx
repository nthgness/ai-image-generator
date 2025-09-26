import { useState, useCallback } from "react";

interface ToastState {
  id: string;
  message: string;
  type: "error" | "success" | "warning" | "info";
  duration: number;
}

export const useToast = () => {
  const [toasts, setToasts] = useState<ToastState[]>([]);

  const showToast = useCallback(
    (
      message: string,
      type: "error" | "success" | "warning" | "info" = "error",
      duration: number = 5000
    ) => {
      const id = `${Date.now()}-${Math.random()}`;
      const newToast = {
        id,
        message,
        type,
        duration,
      };

      setToasts([newToast]);
    },
    []
  );

  const hideToast = useCallback((id?: string) => {
    if (id) {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    } else {
      setToasts([]);
    }
  }, []);

  const currentToast = toasts[0] || null;

  const showError = useCallback(
    (message: string, duration = 5000) => showToast(message, "error", duration),
    [showToast]
  );

  const showSuccess = useCallback(
    (message: string, duration = 3000) =>
      showToast(message, "success", duration),
    [showToast]
  );

  const showWarning = useCallback(
    (message: string, duration = 4000) =>
      showToast(message, "warning", duration),
    [showToast]
  );

  const showInfo = useCallback(
    (message: string, duration = 4000) => showToast(message, "info", duration),
    [showToast]
  );

  return {
    toast: currentToast,
    showToast,
    hideToast: () => hideToast(),
    showError,
    showSuccess,
    showWarning,
    showInfo,
  };
};
