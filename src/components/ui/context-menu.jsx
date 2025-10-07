import React from "react";

export function ContextMenu({ children, className = "" }) {
  return <div className={`relative ${className}`}>{children}</div>;
}

export function ContextMenuTrigger({ children, ...props }) {
  return <div {...props}>{children}</div>;
}

export function ContextMenuContent({ children, className = "" }) {
  return <div className={`absolute bg-white border rounded shadow-lg z-10 ${className}`}>{children}</div>;
}

export function ContextMenuItem({ children, ...props }) {
  return <div className="px-4 py-2 hover:bg-accent cursor-pointer" {...props}>{children}</div>;
}
