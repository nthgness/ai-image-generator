import type { GeneratedImage } from "@types";
import { API_CONFIG } from "@constants/api";

export const generateImageAPI = async (
  prompt: string
): Promise<GeneratedImage> => {
  const hasBannedContent = API_CONFIG.BANNED_WORDS.some((word) =>
    prompt.toLowerCase().includes(word)
  );

  if (hasBannedContent) {
    return Promise.reject(
      new Error(
        "Your prompt contains inappropriate content. Please revise and try again."
      )
    );
  }

  await new Promise((resolve) =>
    setTimeout(resolve, API_CONFIG.PROCESSING_TIME)
  );

  if (Math.random() < API_CONFIG.ERROR_CHANCE) {
    return Promise.reject(
      new Error("Service temporarily unavailable. Please try again.")
    );
  }

  const timestamp = Date.now();
  return {
    id: `img-${timestamp}`,
    prompt,
    imageUrl: `${API_CONFIG.IMAGE_BASE_URL}/${API_CONFIG.IMAGE_SIZE}/${API_CONFIG.IMAGE_SIZE}?random=${timestamp}`,
    createdAt: new Date(),
  };
};
