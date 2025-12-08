import React from "react";

type GradientTextProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "light" | "dark";
};

export function GradientText({
  children,
  className = "",
  variant = "light",
}: GradientTextProps) {
  const variantClass = variant === "light" ? "gradient-text" : "gradient-text-dark";
  return <span className={`${variantClass} ${className}`.trim()}>{children}</span>;
}
