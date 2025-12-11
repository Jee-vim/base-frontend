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
