import { useFieldState } from "../hooks/useFieldState";
import { InputFormProps } from "../types";
import { Input } from "@/components/ui/input";
import { InputWrapper } from "@/components/ui/input/wrapper";

export default function FInputPrice({ label, ...inputProps }: InputFormProps) {
  const { field, error } = useFieldState();

  return (
    <InputWrapper label={label} htmlFor={field.name} error={error}>
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
    </InputWrapper>
  );
}
