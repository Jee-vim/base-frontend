"use-client";
import { useEffect, useState } from "react";
import { useMedia } from "use-media";

export function useBreakpoint() {
  const isMobile = useMedia("(max-width: 768px)");
  const isNotMobile = useMedia("(min-width: 768px)");
  const isTablet = useMedia("(min-width: 769px) and (max-width: 1024px)");
  const isDesktop = useMedia("(min-width: 1025px)");

  return { isMobile, isNotMobile, isTablet, isDesktop };
}
export function useMount() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}
