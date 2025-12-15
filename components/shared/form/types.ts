import { IGroups, IOpt } from "@/types/global";

export interface InputCommonProps {
  label?: string;
  icon?: string;
}

export interface InputFormProps
  extends InputCommonProps,
    React.InputHTMLAttributes<HTMLInputElement> {}

export interface SelectProps extends InputCommonProps {
  groups: IGroups[];
  placeholder?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  triggerClassName?: string;
  contentClassName?: string;
}
export interface SelectSearchProps extends InputCommonProps {
  option: IOpt[];
  placeholder?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  triggerClassName?: string;
  contentClassName?: string;
}
