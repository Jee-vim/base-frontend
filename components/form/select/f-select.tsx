import { useStore } from "@tanstack/react-form";
import { SelectProps } from "../types";
import { UISelect } from "../../ui";
import { useFieldContext } from "..";
import { InputWrapper } from "../input/input-wrapper";

export default function FSelect({ label, ...props }: SelectProps) {
  const field = useFieldContext<string>();
  const errors = useStore(field.store, (state) => state.meta.errors);

  return (
    <InputWrapper
      label={label}
      htmlFor={field.name}
      error={errors?.[0]?.message}
    >
      <UISelect
        value={field.state.value ?? ""}
        onValueChange={(value: string) => field.setValue(value)}
        {...props}
      />
    </InputWrapper>
  );
}
