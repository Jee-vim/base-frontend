"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Loading from "../loading";
import OverlayWrapper from "../overlay";
import { useAppContext } from "@/components/shared/layout/context-provider";

export default function Client({ children }: { children: React.ReactNode }) {
  const { loading, clearLoading, closeOverlay } = useAppContext();
  const path = usePathname();

  useEffect(() => {
    if (path) {
      clearLoading();
      closeOverlay();
    }
  }, [path]);

  useEffect(() => {
    if (!loading) {
      document.body.style.overflow = "unset";
    }
  }, [loading]);

  return (
    <>
      {loading && <Loading />}
      <OverlayWrapper />
      {children}
    </>
  );
}
