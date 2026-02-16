import { useFieldState } from "../hooks/useFieldState";
import { InputRadioFormProps } from "../types";

export default function FInputRadio<T extends string | number | boolean>({
  label,
  optionLabel,
  optionValue,
  ...props
}: InputRadioFormProps<T>) {
  const { field, error } = useFieldState();

  const domValue = String(optionValue);
  const checked = field.state.value === optionValue;

  return (
    <div className="flex items-center gap-2">
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          name={field.name}
          value={domValue}
          checked={checked}
          onChange={() => field.setValue(optionValue)}
          className="form-radio"
          {...props}
        />
        {optionLabel}
      </label>
      {error && <p className="error">{error}</p>}
    </div>
  );
}
