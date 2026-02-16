import { useFieldState } from "../hooks/useFieldState";
import { InputFormProps } from "../types";
import { Input } from "@/components/ui/input";
import { InputWrapper } from "@/components/ui/input/wrapper";

export default function FInput({ label, icon, ...inputProps }: InputFormProps) {
  const { field, error } = useFieldState();

  return (
    <InputWrapper label={label} htmlFor={field.name} error={error}>
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
    </InputWrapper>
  );
}
