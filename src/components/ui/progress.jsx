import React from "react";

export function Progress({ value, max = 100, className = "" }) {
  return (
    <div className={`w-full bg-gray-200 rounded h-4 ${className}`}>
      <div
        className="bg-primary h-4 rounded"
        style={{ width: `${(value / max) * 100}%` }}
      />
    </div>
  );
}
