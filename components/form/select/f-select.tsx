import { useStore } from "@tanstack/react-form";
import { SelectProps } from "../types";
import { UISelect } from "../../ui";
import { useFieldContext } from "..";

export default function FSelect({ label, ...props }: SelectProps) {
  const field = useFieldContext<string>();
  const errors = useStore(field.store, (state) => state.meta.errors);

  return (
    <div className="input-wrapper">
      {label && <label htmlFor={field.name}>{label}</label>}
      <UISelect
        value={field.state.value ?? ""}
        onValueChange={(value: string) => field.setValue(value)}
        {...props}
      />
      {errors?.length > 0 &&
        errors.map((it) => (
          <p key={it} className="error">
            {it.message}
          </p>
        ))}
    </div>
  );
}
