import { useFieldState } from "../hooks/useFieldState";
import { Checkbox } from "@/components/ui/input";

interface FInputCheckboxMultiProps {
  label?: string;
  options: { label: string; value: string }[];
  disabled?: boolean;
}

export default function FInputCheckboxMulti({
  label,
  options,
  disabled,
}: FInputCheckboxMultiProps) {
  const { field, error } = useFieldState();

  const values = (field.state.value as string[]) || [];

  const handleCheckedChange = (optionValue: string, checked: boolean) => {
    if (checked) {
      field.setValue([...values, optionValue]);
    } else {
      field.setValue(values.filter((v) => v !== optionValue));
    }
  };

  return (
    <div>
      {label && <p className="label">{label}</p>}
      {options.map((option) => (
        <Checkbox
          key={option.value}
          checked={values.includes(option.value)}
          onCheckedChange={(checked: boolean) =>
            handleCheckedChange(option.value, checked)
          }
          label={option.label}
          disabled={disabled}
        />
      ))}
      {error && <p className="error">{error}</p>}
    </div>
  );
}
