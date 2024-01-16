"use client";
import Lottie from "lottie-react";
import React from "react";

export default function LottieFile({ lottie, ...props }: any) {
  return <Lottie animationData={lottie} {...props} />;
}
