import { createFormHook, createFormHookContexts } from "@tanstack/react-form";
export const { fieldContext, useFieldContext, formContext, useFormContext } =
  createFormHookContexts();

import { FInput } from "./input/f-input";
import SubmitBtn from "./submit";
import FSelect from "./select/f-select";
import { FInputPrice } from "./input/f-input-price";
import { FInputPassword } from "./input/f-input-password";
import FSelectSearch from "./select/f-select-search";

// ref: https://github.com/TanStack/form/discussions/1200
export const { useAppForm } = createFormHook({
  fieldComponents: {
    FInput,
    FInputPrice,
    FInputPassword,
    FSelect,
    FSelectSearch,
  },
  formComponents: {
    SubmitBtn,
  },
  fieldContext: fieldContext,
  formContext: formContext,
});
