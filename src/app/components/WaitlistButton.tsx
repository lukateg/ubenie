"use client";

import { useWaitlist } from "../context/WaitlistContext";

interface WaitlistButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "custom";
}

export default function WaitlistButton({
  children,
  className,
  variant = "primary",
}: WaitlistButtonProps) {
  const { openModal } = useWaitlist();

  // Default styles based on variant
  const variantStyles = {
    primary: "bg-black text-white hover:bg-gray-800",
    secondary: "bg-blue-600 text-white hover:bg-blue-700",
    custom: "",
  };

  const baseStyles =
    "px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center gap-2";

  const buttonClassName = className
    ? className
    : `${baseStyles} ${variantStyles[variant]}`;

  return (
    <button onClick={openModal} className={buttonClassName}>
      {children}
    </button>
  );
}
