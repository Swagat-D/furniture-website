import React from "react";

export function HoverCard({ children, className = "" }) {
  return <div className={`relative group ${className}`}>{children}</div>;
}

export function HoverCardTrigger({ children, ...props }) {
  return <div {...props}>{children}</div>;
}

export function HoverCardContent({ children, className = "" }) {
  return <div className={`absolute left-0 top-full mt-2 bg-white border rounded shadow-lg z-10 hidden group-hover:block ${className}`}>{children}</div>;
}
