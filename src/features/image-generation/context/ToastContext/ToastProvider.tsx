import { useToast } from "@/features/image-generation/hooks/useToast";
import { ToastContext } from "./ToastContext";
import Toast from "@shared/ui/Toast";

interface ToastProviderProps {
  children: React.ReactNode;
}

export const ToastProvider = ({ children }: ToastProviderProps) => {
  const { toast, showToast, hideToast, showError, showSuccess, showWarning, showInfo } = useToast();

  const value = {
    showToast,
    showError,
    showSuccess,
    showWarning,
    showInfo,
    hideToast,
  };

  return (
    <ToastContext.Provider value={value}>
      {children}
      {toast && (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          duration={toast.duration}
          onClose={hideToast}
        />
      )}
    </ToastContext.Provider>
  );
};
