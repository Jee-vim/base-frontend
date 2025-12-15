// ref: https://github.com/TanStack/form/discussions/1200

import { createFormHook, createFormHookContexts } from "@tanstack/react-form";
export const { fieldContext, useFieldContext, formContext, useFormContext } =
  createFormHookContexts();

import { InputForm } from "./input/input-form";
import SubmitBtn from "./submit";
import ResetBtn from "./reset";

export const { useAppForm } = createFormHook({
  fieldComponents: {
    InputForm,
  },
  formComponents: {
    SubmitBtn,
    ResetBtn,
  },
  fieldContext: fieldContext,
  formContext: formContext,
});
