import React from "react";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={`font-bold text-xl flex items-center ${className || ""}`}>
      <span>Solo Regular</span>
    </div>
  );
}
