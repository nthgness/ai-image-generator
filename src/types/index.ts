export interface GeneratedImage {
  id: string;
  prompt: string;
  imageUrl: string;
  createdAt: Date;
}

export interface UseImageManagerReturn {
  currentImage: GeneratedImage | null;
  history: GeneratedImage[];
  selectFromHistory: (id: string) => void;
  clearHistory: () => void;
  handleAddImage: (image: GeneratedImage) => void;
}
