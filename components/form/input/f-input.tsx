import { useStore } from "@tanstack/react-form";
import { useFieldContext } from "..";
import { InputFormProps } from "../types";
import { Input } from "./input";
import { InputWrapper } from "./input-wrapper";

export default function FInput({ label, icon, ...inputProps }: InputFormProps) {
  const field = useFieldContext<string>();
  const errors = useStore(field.store, (state) => state.meta.errors);

  return (
    <InputWrapper
      label={label}
      htmlFor={field.name}
      error={errors?.[0]?.message}
    >
      <Input
        {...inputProps}
        icon={icon}
        id={field.name}
        name={field.name}
        value={field.state.value ?? ""}
        onChange={(e) => field.setValue(e.target.value)}
        onBlur={field.handleBlur}
      />
    </InputWrapper>
  );
}
