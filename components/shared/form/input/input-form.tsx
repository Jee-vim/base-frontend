import { useStore } from "@tanstack/react-form";
import { useFieldContext } from "..";
import Image from "next/image";

interface InputFormProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: string;
}

export function InputForm({ label, icon, ...inputProps }: InputFormProps) {
  const field = useFieldContext<string>();
  const errors = useStore(field.store, (state) => state.meta.errors);

  return (
    <div className="input-wrapper">
      {label && <label htmlFor={field.name}>{label}</label>}
      <div>
        {icon && (
          <Image src={icon} alt={`${field.name}-icon`} width={18} height={18} />
        )}
        <input
          {...inputProps}
          id={field.name}
          name={field.name}
          value={field.state.value ?? ""}
          onChange={(e) => field.setValue(e.target.value)}
          onBlur={field.handleBlur}
        />
      </div>
      {errors?.length > 0 &&
        errors.map((it) => (
          <p key={it} className="error">
            {it.message}
          </p>
        ))}
    </div>
  );
}
