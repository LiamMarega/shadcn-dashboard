"use client";
import React from "react";
import Lottie from "lottie-react";
import customerLoading from "@/lib/assets/lotties/customers.json";
import { useLockedBody } from "@/lib/hooks/useBodyLock";
import { useGlobalStore } from "@/lib/stores/global-store";

export default function Loading() {
  const [_, setLocked] = useLockedBody(false);

  const { loading } = useGlobalStore((state) => ({
    loading: state.loading,
  }));

  React.useEffect(() => {
    loading ? setLocked(true) : setLocked(false);
  }, []);

  if (!loading) return null;

  return (
    <div className="flex bg-white bg-opacity-75 justify-center items-center z-50 w-screen h-screen fixed">
      <div className="flex flex-col justify-center items-center">
        <Lottie animationData={customerLoading} className="w-52 h-5w-52" />
      </div>
    </div>
  );
}
