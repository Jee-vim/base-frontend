"use client";

import { useStore } from "@tanstack/react-form";
import { useFieldContext } from "..";

/**
 * Hook to get field state (value, errors, etc.)
 * Reduces redundancy across form components
 */
export function useFieldState() {
  const field = useFieldContext();
  const errors = useStore(field.store, (state) => state.meta.errors);
  const error = errors?.[0]?.message;

  return {
    field,
    errors,
    error,
  };
}
