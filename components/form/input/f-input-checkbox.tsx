import { useStore } from "@tanstack/react-form";
import { useFieldContext } from "..";
import { cn } from "@/lib/utils";
import { InputCheckboxFormProps } from "../types";
import Checkbox from "./checkbox";

export default function FInputCheckbox<T>({
  label,
  optionValue,
  className,
  ...props
}: Omit<InputCheckboxFormProps<T>, "checked" | "onChange">) {
  const field = useFieldContext<T | undefined>();
  const errors = useStore(field.store, (state) => state.meta.errors);

  const checked = field.state.value === optionValue;

  return (
    <div className={cn("input-wrapper", className)}>
      <Checkbox
        checked={checked}
        optionValue={optionValue}
        onChange={(val) => field.setValue(val)}
        label={label}
        {...props}
      />

      {errors?.length > 0 &&
        errors.map((it) => (
          <p key={it.message} className="error">
            {it.message}
          </p>
        ))}
    </div>
  );
}
