import { useFieldState } from "../hooks/useFieldState";
import { Switch } from "@/components/ui/input";

interface FInputSwitchProps {
  label?: string;
  disabled?: boolean;
}

export default function FInputSwitch({ label, disabled }: FInputSwitchProps) {
  const { field, error } = useFieldState();

  return (
    <div>
      <Switch
        checked={field.state.value as boolean}
        onCheckedChange={(checked: boolean) => field.setValue(checked)}
        label={label}
        disabled={disabled}
      />
      {error && <p className="error">{error}</p>}
    </div>
  );
}
