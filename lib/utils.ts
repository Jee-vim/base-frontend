import { GTMEvent, IParams } from "@/types/global";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function trackEvent({ event, action = "click", ...rest }: GTMEvent) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];

  window.dataLayer.push({
    action,
    event,
    ...rest,
  });
}

export const cleanParams = (params?: IParams) => {
  return Object?.fromEntries(
    Object?.entries(params || "").filter(
      ([, value]) => value !== undefined && value !== "all",
    ),
  );
};
