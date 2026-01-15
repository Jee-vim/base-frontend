import { IGroups, IOpt } from "@/types/global";

export interface InputCommonProps {
  label?: string;
  icon?: string;
  info?: string;
}

export interface SelectCommonProps extends InputFormProps {
  disabled?: boolean;
  required?: boolean;
  placeholder?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  triggerClassName?: string;
  contentClassName?: string;
  trigger?: React.ReactNode;
}

export interface InputFormProps
  extends InputCommonProps,
    React.InputHTMLAttributes<HTMLInputElement> {}
export interface InputAreaFormProps
  extends InputCommonProps,
    React.InputHTMLAttributes<HTMLTextAreaElement> {}
type RadioValue = string | number | boolean;
export interface InputRadioFormProps<T extends RadioValue>
  extends InputCommonProps,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange"> {
  optionValue: T;
}
export interface InputCheckboxFormProps<T>
  extends Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      "onChange" | "checked"
    >,
    InputCommonProps {
  checked: boolean;
  optionValue: T;
  onChange: (value: T | undefined) => void;
}

export interface SelectProps extends SelectCommonProps {
  groups: IGroups[];
}
export interface SelectSearchProps extends SelectCommonProps {
  option: IOpt[];
}
