import { useFieldState } from "../hooks/useFieldState";
import { InputFormProps } from "../types";
import { Input } from "./input";

export default function FInput({ label, icon, ...inputProps }: InputFormProps) {
  const { field, error } = useFieldState();

  return (
    <div className="input-wrapper">
      {label && <label htmlFor={field.name}>{label}</label>}
      <Input
        {...inputProps}
        icon={icon}
        id={field.name}
        name={field.name}
        value={(field.state.value ?? "") as string}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          field.setValue(e.target.value)
        }
        onBlur={field.handleBlur}
      />
      {error && <p className="error">{error}</p>}
    </div>
  );
}
