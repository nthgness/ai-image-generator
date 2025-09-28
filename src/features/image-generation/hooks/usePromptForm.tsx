import React, { useState } from "react";
import { useQueryContext } from "@features/image-generation/context/QueryContext/QueryContext";
import { useGenerationContext } from "@features/image-generation/context/GenerationContext/GenerationContext";
import { useToastContext } from "@features/image-generation/context/ToastContext/ToastContext";
import { useValidation } from "@features/image-generation/hooks/useValidation";

export const usePromptForm = () => {
  const { isLoading, error, clearError, generate } = useQueryContext();
  const { handleAddImage } = useGenerationContext();
  const { showError, showWarning } = useToastContext();
  const { validatePrompt } = useValidation();

  const [prompt, setPrompt] = useState<string>("");
  const [localError, setLocalError] = useState<string | null>(null);

  const handleError = (errorMessage: string, type: 'validation' | 'generation') => {
    if (type === 'validation') {
      setLocalError(errorMessage);
      showWarning(errorMessage);
    } else {
      showError(errorMessage);
    }
  };

  const resetAllErrors = () => {
    setLocalError(null);
    if (error) {
      clearError();
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPrompt = event.target.value;
    
    setPrompt(newPrompt);
    resetAllErrors();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      event.preventDefault();
    
      const syntheticEvent = {
        preventDefault: () => {},
      } as React.FormEvent;
      handleSubmit(syntheticEvent);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    resetAllErrors();

    const validation = validatePrompt(prompt);
    if (!validation.isValid && validation.error) {
      handleError(validation.error, 'validation');
      return;
    }

    try {
      const result = await generate(prompt.trim());
      handleAddImage(result);
      setPrompt("");
    } catch (generationError) {
      console.error("Error during image generation:", generationError);
      handleError("Failed to generate image. Please try again.", 'generation');
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
    handleKeyDown,
    handleSubmit,
    isSubmitDisabled,
    displayError,
    validation,
    resetAllErrors,
  };
};