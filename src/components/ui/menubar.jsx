import React from "react";

export function Menubar({ children, className = "" }) {
  return <nav className={`flex gap-4 ${className}`}>{children}</nav>;
}

export function MenubarItem({ children, ...props }) {
  return <button className="px-4 py-2 hover:bg-accent rounded" {...props}>{children}</button>;
}
