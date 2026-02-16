import { useFieldState } from "../hooks/useFieldState";
import { InputFormProps } from "../types";
import { Input } from "./input";

export default function FInputPrice({ label, ...inputProps }: InputFormProps) {
  const { field, error } = useFieldState();

  return (
    <div className="input-wrapper">
      {label && <label htmlFor={field.name}>{label}</label>}
      <Input
        {...inputProps}
        id={field.name}
        name={field.name}
        value={(field.state.value ?? "") as string}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const val = e.target.value.replace(/,/g, "");
          field.setValue(Number(val));
        }}
        onBlur={field.handleBlur}
      />
      {error && <p className="error">{error}</p>}
    </div>
  );
}
