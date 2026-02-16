import { useStore } from "@tanstack/react-form";
import { useFieldContext } from "..";
import { SelectSearchProps } from "../types";
import { UISelectSearch } from "../../ui";
import { InputWrapper } from "../input/input-wrapper";

export default function FSelectSearch({ label, ...props }: SelectSearchProps) {
  const field = useFieldContext<string>();
  const errors = useStore(field.store, (state) => state.meta.errors);

  return (
    <InputWrapper
      label={label}
      htmlFor={field.name}
      error={errors?.[0]?.message}
    >
      <UISelectSearch
        value={field.state.value ?? ""}
        onValueChange={(value: string) => field.setValue(value)}
        {...props}
      />
    </InputWrapper>
  );
}
