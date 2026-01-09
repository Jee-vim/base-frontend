import { createFormHook, createFormHookContexts } from "@tanstack/react-form";
export const { fieldContext, useFieldContext, formContext, useFormContext } =
  createFormHookContexts();

import { FInput } from "./input/f-input";
import SubmitBtn from "./submit";
import FSelect from "./select/f-select";
import { FInputPrice } from "./input/f-input-price";
import { FInputPassword } from "./input/f-input-password";
import FSelectSearch from "./select/f-select-search";
import FInputArea from "./input/f-input-area";
import FInputRadio from "./input/f-input-radio";

// ref: https://github.com/TanStack/form/discussions/1200
export const { useAppForm } = createFormHook({
  fieldComponents: {
    FInput,
    FInputPrice,
    FInputPassword,
    FInputArea,
    FInputRadio,
    FSelect,
    FSelectSearch,
  },
  formComponents: {
    SubmitBtn,
  },
  fieldContext: fieldContext,
  formContext: formContext,
});
