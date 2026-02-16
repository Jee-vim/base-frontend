import { useFieldState } from "../hooks/useFieldState";
import { SelectProps } from "../types";
import { UISelect } from "../../ui";

export default function FSelect({ label, ...props }: SelectProps) {
  const { field, error } = useFieldState();

  return (
    <div className="input-wrapper">
      {label && <label htmlFor={field.name}>{label}</label>}
      <UISelect
        value={(field.state.value ?? "") as string}
        onValueChange={(value: string) => field.setValue(value)}
        {...props}
      />
      {error && <p className="error">{error}</p>}
    </div>
  );
}
