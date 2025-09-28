export const PROMPT_CONSTRAINTS = {
  MIN_LENGTH: 3,
  MAX_LENGTH: 500,
  WARNING_THRESHOLD: 400,
} as const;

export const VALIDATION_MESSAGES = {
  PROMPT_TOO_SHORT: `Prompt must be at least ${PROMPT_CONSTRAINTS.MIN_LENGTH} characters long`,
  PROMPT_TOO_LONG: `Prompt must be no longer than ${PROMPT_CONSTRAINTS.MAX_LENGTH} characters`,
  GENERATION_FAILED: "Image generation failed. Please try again.",
  NETWORK_ERROR: "Network error. Please check your connection.",
} as const;
