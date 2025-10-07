import React, { useState } from "react";

export function Collapsible({ open, children, className = "" }) {
  return open ? <div className={className}>{children}</div> : null;
}

export function CollapsibleTrigger({ children, ...props }) {
  return <button {...props}>{children}</button>;
}

export function CollapsibleContent({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}
