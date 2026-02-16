import { useFieldState } from "../hooks/useFieldState";
import Checkbox from "./checkbox";

interface FInputCheckboxProps {
  label?: string;
  disabled?: boolean;
}

export default function FInputCheckbox({
  label,
  disabled,
}: FInputCheckboxProps) {
  const { field, error } = useFieldState();

  return (
    <div>
      <Checkbox
        checked={field.state.value as boolean}
        onCheckedChange={(checked: boolean) => field.setValue(checked)}
        label={label}
        disabled={disabled}
      />
      {error && <p className="error">{error}</p>}
    </div>
  );
}
