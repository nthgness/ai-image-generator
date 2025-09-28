export interface GeneratedImage {
  id: string;
  prompt: string;
  imageUrl: string;
  createdAt: Date;
}

export interface ImageManagerType {
  currentImage: GeneratedImage | null;
  history: GeneratedImage[];
  selectFromHistory: (id: string) => void;
  clearHistory: () => void;
  handleAddImage: (image: GeneratedImage) => void;
}

export interface ToastContextType {
  showToast: (
    message: string,
    type?: "error" | "success" | "warning" | "info",
    duration?: number
  ) => void;
  showError: (message: string, duration?: number) => void;
  showSuccess: (message: string, duration?: number) => void;
  showWarning: (message: string, duration?: number) => void;
  showInfo: (message: string, duration?: number) => void;
  hideToast: () => void;
}
