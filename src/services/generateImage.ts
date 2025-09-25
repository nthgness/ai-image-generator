import type { GeneratedImage } from "../types";

export const generateImageAPI = async (
  prompt: string
): Promise<GeneratedImage> => {
  const bannedWords = ["violence", "nsfw", "inappropriate", "fuck"];
  const haseBannedContent = bannedWords.some((word) =>
    prompt.toLowerCase().includes(word)
  );

  if (haseBannedContent) {
    throw new Error(
      "Your prompt contains inappropriate content. Please revise and try again."
    );
  }

  const processingTime = Math.random() * 3000 + 1000;
  await new Promise((resolve) => setTimeout(resolve, processingTime));

  const errorChance = Math.random();

  if (errorChance < 0.02) {
    throw new Error(
      "API rate limit exceeded. Please try again in a few minutes."
    );
  }

  if (errorChance < 0.05) {
    throw new Error(
      "Content filter triggered. Please modify your prompt and try again."
    );
  }

  if (errorChance < 0.08) {
    throw new Error(
      "Server is temporarily overloaded. Please try again later."
    );
  }

  if (errorChance < 0.12) {
    throw new Error(
      "Network timeout. Please check your connection and try again."
    );
  }

  return {
    id: `img-${Date.now()}`,
    prompt,
    imageUrl: `https://picsum.photos/512/512?random=${Math.floor(
      Math.random() * 1000
    )}`,
    createdAt: new Date(),
  };
};
