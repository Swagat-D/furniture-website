import React from "react";

export function AspectRatio({ ratio = 1, children, className = "" }) {
  return (
    <div className={className} style={{ aspectRatio: ratio }}>
      {children}
    </div>
  );
}
