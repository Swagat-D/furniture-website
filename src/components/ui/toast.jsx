import React, { useState, useEffect } from "react";

export function Toast({ message, open, onClose, duration = 3000 }) {
  useEffect(() => {
    if (open) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [open, onClose, duration]);
  if (!open) return null;
  return (
    <div className="fixed bottom-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded shadow-lg z-50">
      {message}
    </div>
  );
}
