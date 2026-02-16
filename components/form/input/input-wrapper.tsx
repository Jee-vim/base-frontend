import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface InputWrapperProps {
  label?: string;
  htmlFor?: string;
  error?: string;
  children: ReactNode;
  className?: string;
}

export function InputWrapper({
  label,
  htmlFor,
  error,
  children,
  className,
}: InputWrapperProps) {
  return (
    <div className={cn("input-wrapper", className)}>
      {label && <label htmlFor={htmlFor}>{label}</label>}
      {children}
      {error && <p className="error">{error}</p>}
    </div>
  );
}
