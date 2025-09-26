import { useCallback } from 'react';
import { PROMPT_CONSTRAINTS } from '@constants/validation';
import { VALIDATION_MESSAGES } from '@constants/validation';

export interface ValidationResult {
  isValid: boolean;
  error: string | null;
  warning: string | null;
  characterCount: number;
  remainingCharacters: number;
}

export const useValidation = () => {
  const validatePrompt = useCallback((prompt: string): ValidationResult => {
    const trimmedPrompt = prompt.trim();
    const characterCount = trimmedPrompt.length;
    const remainingCharacters = PROMPT_CONSTRAINTS.MAX_LENGTH - characterCount;

    if (characterCount === 0) {
      return {
        isValid: false,
        error: 'Please enter a description for your image',
        warning: null,
        characterCount,
        remainingCharacters,
      };
    }


    if (characterCount < PROMPT_CONSTRAINTS.MIN_LENGTH) {
      return {
        isValid: false,
        error: VALIDATION_MESSAGES.PROMPT_TOO_SHORT,
        warning: null,
        characterCount,
        remainingCharacters,
      };
    }


    if (characterCount > PROMPT_CONSTRAINTS.MAX_LENGTH) {
      return {
        isValid: false,
        error: VALIDATION_MESSAGES.PROMPT_TOO_LONG,
        warning: null,
        characterCount,
        remainingCharacters,
      };
    }


    let warning = null;
    if (characterCount > PROMPT_CONSTRAINTS.WARNING_THRESHOLD) {
      warning = `You have ${remainingCharacters} characters remaining`;
    }

    return {
      isValid: true,
      error: null,
      warning,
      characterCount,
      remainingCharacters,
    };
  }, []);

  return {
    validatePrompt,
  };
};
