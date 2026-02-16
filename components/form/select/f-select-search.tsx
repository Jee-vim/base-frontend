import { useFieldState } from "../hooks/useFieldState";
import { SelectSearchProps } from "../types";
import { UISelectSearch } from "../../ui";

export default function FSelectSearch({ label, ...props }: SelectSearchProps) {
  const { field, error } = useFieldState();

  return (
    <div className="input-wrapper">
      {label && <label htmlFor={field.name}>{label}</label>}
      <UISelectSearch
        value={(field.state.value ?? "") as string}
        onValueChange={(value: string) => field.setValue(value)}
        {...props}
      />
      {error && <p className="error">{error}</p>}
    </div>
  );
}
