import { useFieldState } from "../hooks/useFieldState";
import { SelectSearchProps } from "../types";
import { UISelectSearch } from "../../ui";
import { InputWrapper } from "../input/input-wrapper";

export default function FSelectSearch({ label, ...props }: SelectSearchProps) {
  const { field, error } = useFieldState();

  return (
    <InputWrapper label={label} htmlFor={field.name} error={error}>
      <UISelectSearch
        value={(field.state.value ?? "") as string}
        onValueChange={(value: string) => field.setValue(value)}
        {...props}
      />
    </InputWrapper>
  );
}
