"use client";
import Otp from "@/components/form/input/otp";
import { useAppContext } from "@/components/layout/context-provider";
import { signIn } from "next-auth/react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function Index() {
  const { setLoading, clearLoading } = useAppContext();
  const [otp, setOtp] = useState("");
  const handleVerify = async () => {
    try {
      setLoading();
      const sign = await signIn("verify-otp", {
        otp,
        redirect: false,
      });
      sign?.error ? toast.error(sign.error) : (window.location.href = "/");
    } catch (err) {
      console.error("Unexpected: ", err);
      toast.error("Something broke. Try again.");
    } finally {
      clearLoading();
    }
  };
  useEffect(() => {
    otp.length === 6 && handleVerify();
  }, [otp.length]);
  return (
    <div className="flex items-center justify-center h-dvh">
      <Otp value={otp} onChange={(e) => setOtp(e)} />
    </div>
  );
}
