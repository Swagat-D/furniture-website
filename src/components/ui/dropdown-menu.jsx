import React from "react";

export function DropdownMenu({ children, className = "" }) {
  return <div className={`relative ${className}`}>{children}</div>;
}

export function DropdownMenuTrigger({ children, ...props }) {
  return <button {...props}>{children}</button>;
}

export function DropdownMenuContent({ children, className = "" }) {
  return <div className={`absolute mt-2 bg-white border rounded shadow-lg z-10 ${className}`}>{children}</div>;
}

export function DropdownMenuItem({ children, ...props }) {
  return <div className="px-4 py-2 hover:bg-accent cursor-pointer" {...props}>{children}</div>;
}
