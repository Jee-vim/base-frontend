import { useFieldState } from "../hooks/useFieldState";
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
  const { field, error } = useFieldState();

  return (
    <InputWrapper label={label} htmlFor={field.name} error={error} info={info}>
      <div
        className="input-trigger h-auto items-start"
        data-disabled={props.disabled ? "" : undefined}
      >
        {icon && (
          <Image
            src={icon}
            alt="${field.name}-icon"
            width={18}
            height={18}
            className="pt-1"
          />
        )}
        <textarea
          {...props}
          id={field.name}
          name={field.name}
          value={(field.state.value ?? "") as string}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            field.setValue(e.target.value)
          }
          rows={5}
          className={className}
        />
      </div>
    </InputWrapper>
  );
}
