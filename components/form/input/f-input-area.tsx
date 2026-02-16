import { cn } from "@/lib/utils";
import { useFieldContext } from "..";
import { useStore } from "@tanstack/react-form";
import { InputAreaFormProps } from "../types";
import Image from "next/image";
import { InputWrapper } from "./input-wrapper";

export default function FInputArea({
  label,
  info,
  icon,
  className,
  ...props
}: InputAreaFormProps) {
  const field = useFieldContext<string>();
  const errors = useStore(field.store, (state) => state.meta.errors);

  return (
    <InputWrapper
      label={label}
      htmlFor={field.name}
      error={errors?.[0]?.message}
      className={className}
    >
      <div
        className="input-trigger h-auto! items-start!"
        data-disabled={props.disabled ? "" : undefined}
      >
        {icon && (
          <Image
            src={icon}
            alt={`${field.name}-icon`}
            width={18}
            height={18}
            className="pt-1"
          />
        )}
        <textarea
          {...props}
          id={field.name}
          name={field.name}
          value={field.state.value ?? ""}
          onChange={(e) => field.setValue(e.target.value)}
          rows={5}
          className={cn("w-full", className)}
        />
      </div>
      {info && <p className="text-xs">{info}</p>}
    </InputWrapper>
  );
}
