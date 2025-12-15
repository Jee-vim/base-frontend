export type GTMEvent = {
  event: string;
  action: string;
  label?: string;
  [key: string]: any;
};

declare global {
  interface Window {
    dataLayer: GTMEvent[];
  }
}

declare interface IParams {
  page?: number;
  limit?: number;
  search?: string;
}

declare interface IOverlay {
  open?: boolean;
  data?: Record<string, unknown>; // accept any obj
  id?: string;
  isPadding?: boolean;
  disableOutsideInteraction?: boolean;
  children?: React.ReactNode;
}

declare interface ControlledOverlay extends IOverlay {
  open: boolean;
  onClose: () => void;
  trigger?: never;
}

declare interface UncontrolledOverlay extends IOverlay {
  open?: undefined;
  onClose?: () => void;
  trigger: React.ReactNode;
}

declare type IDialogDrawer = ControlledOverlay | UncontrolledOverlay;

declare interface IOpt {
  label: string;
  items: { value: string; label: string; disabled?: boolean }[];
}
