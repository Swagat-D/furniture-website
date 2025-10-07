import React from "react";

export function Toggle({ checked, onChange, className = "", ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded ${checked ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"} ${className}`}
      onClick={() => onChange(!checked)}
      {...props}
    >
      {checked ? "On" : "Off"}
    </button>
  );
}
