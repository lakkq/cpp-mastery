import React from "react";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <div className={`glass-surface main-card ${className}`.trim()}>
      <div className="glass-inner">{children}</div>
    </div>
  );
}
