import { useFieldState } from "../hooks/useFieldState";
import { SelectProps } from "../types";
import { UISelect } from "../../ui";
import { InputWrapper } from "@/components/ui/input/wrapper";

export default function FSelect({ label, ...props }: SelectProps) {
  const { field, error } = useFieldState();

  return (
    <InputWrapper label={label} htmlFor={field.name} error={error}>
      <UISelect
        value={(field.state.value ?? "") as string}
        onValueChange={(value: string) => field.setValue(value)}
        {...props}
      />
    </InputWrapper>
  );
}
