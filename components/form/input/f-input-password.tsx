import { useState } from "react";
import Image from "next/image";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useFieldState } from "../hooks/useFieldState";
import { InputFormProps } from "../types";
import { InputWrapper } from "./input-wrapper";

export default function FInputPassword({
  label,
  icon,
  ...inputProps
}: InputFormProps) {
  const { field, error } = useFieldState();
  const [show, setShow] = useState(false);

  return (
    <InputWrapper label={label} htmlFor={field.name} error={error}>
      <div className="input-trigger">
        {icon && (
          <Image src={icon} alt="${field.name}-icon" width={18} height={18} />
        )}
        <input
          {...inputProps}
          type={show ? "text" : "password"}
          id={field.name}
          name={field.name}
          value={(field.state.value ?? "") as string}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            field.setValue(e.target.value)
          }
          onBlur={field.handleBlur}
        />
        <button
          type="button"
          aria-label={show ? "Hide password" : "Show password"}
          onClick={() => setShow((v) => !v)}
          className="w-fit"
        >
          {show ? <FiEyeOff size={18} /> : <FiEye size={18} />}
        </button>
      </div>
    </InputWrapper>
  );
}
