import React, { useState} from "react";
import { useQueryContext, useGenerationContext } from "../context";
import { useValidation } from "./useValidation";

export const usePromptForm = () => {
  const { isLoading, error, clearError, generate } = useQueryContext();
  const { handleAddImage } = useGenerationContext();
  const { validatePrompt } = useValidation();

  const [prompt, setPrompt] = useState<string>("");
  const [localError, setLocalError] = useState<string | null>(null);


  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newPrompt = event.target.value;
    
    setPrompt(newPrompt);
    setLocalError(null);

    if (error) {
      clearError();
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    setLocalError(null);
    
    if (error) {
      clearError();
    }


    const validation = validatePrompt(prompt);
    if (!validation.isValid) {
      setLocalError(validation.error);
      return;
    }

    try {
      const result = await generate(prompt.trim());
      if (result) {
        handleAddImage(result);
        setPrompt("");
      }
    } catch (error) {
      console.error("Error during image generation:", error);
    }
  };


  const validation = validatePrompt(prompt);
  
  const displayError = localError || error;
  const isSubmitDisabled = isLoading;

  return {
    prompt,
    isLoading,
    error,
    localError,
    handleInputChange,
    handleSubmit,
    isSubmitDisabled,
    displayError,
    validation,
  };
};