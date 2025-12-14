"use client";

import { useAppContext } from "@/components/shared/layout/context-provider";
import { signIn } from "next-auth/react";
import { toast } from "sonner";

export default function Index() {
  const { setLoading, clearLoading } = useAppContext();
  const handleSign = async () => {
    try {
      setLoading();
      const sign = await signIn("send-otp", {
        email: "vosiha8496@kudimi.com",
        redirect: false,
      });
      sign?.error
        ? toast.error(sign.error)
        : (window.location.href = "/verify");
    } catch (err) {
      console.error("Unexpected: ", err);
      toast.error("Something broke. Try again.");
    } finally {
      clearLoading();
    }
  };
  return (
    <div className="flex items-center justify-center h-dvh">
      <button type="button" onClick={handleSign}>
        Login
      </button>
    </div>
  );
}
