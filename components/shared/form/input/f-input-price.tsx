import { useStore } from "@tanstack/react-form";
import { useFieldContext } from "..";
import Image from "next/image";
import { InputFormProps } from "../types";

export function FInputPrice({ label, icon, ...inputProps }: InputFormProps) {
  const field = useFieldContext<string>();
  const errors = useStore(field.store, (state) => state.meta.errors);

  const formatIDR = (value: string | number) => {
    if (!value) return "";

    const num = typeof value === "string" ? Number(value) : value;

    if (Number.isNaN(num)) return "";

    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(num);
  };

  return (
    <div className="input-wrapper">
      {label && <label htmlFor={field.name}>{label}</label>}
      <div className="input-trigger">
        {icon && (
          <Image src={icon} alt={`${field.name}-icon`} width={18} height={18} />
        )}
        <input
          {...inputProps}
          id={field.name}
          name={field.name}
          value={formatIDR(field.state.value ?? "")}
          onChange={(e) => {
            const digitsOnly = e.target.value.replace(/\D/g, "");
            field.setValue(digitsOnly);
          }}
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
