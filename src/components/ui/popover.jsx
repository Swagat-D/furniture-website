import React, { useState, useRef, useEffect } from "react";

export function Popover({ open, onOpenChange, children }) {
  useEffect(() => {
    if (open && onOpenChange) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open, onOpenChange]);
  return open ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-background rounded shadow-lg p-6 min-w-[300px] max-w-full">
        {children}
      </div>
    </div>
  ) : null;
}

export function PopoverTrigger({ asChild, children, ...props }) {
  return React.cloneElement(children, {
    ...props,
    onClick: (e) => {
      if (children.props.onClick) children.props.onClick(e);
      if (props.onClick) props.onClick(e);
    },
  });
}

export function PopoverContent({ className = "", children }) {
  return <div className={className}>{children}</div>;
}
