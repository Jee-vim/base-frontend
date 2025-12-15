import { createFormHook, createFormHookContexts } from "@tanstack/react-form";
export const { fieldContext, useFieldContext, formContext, useFormContext } =
  createFormHookContexts();

import { FInput } from "./input/f-input";
import SubmitBtn from "./submit";
import ResetBtn from "./reset";
import FSelect from "./select/f-select";
import { FInputPrice } from "./input/f-input-price";

// ref: https://github.com/TanStack/form/discussions/1200
export const { useAppForm } = createFormHook({
  fieldComponents: {
    FInput,
    FInputPrice,
    FSelect,
  },
  formComponents: {
    SubmitBtn,
    ResetBtn,
  },
  fieldContext: fieldContext,
  formContext: formContext,
});
