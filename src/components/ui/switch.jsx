import React from "react";

export function Switch({ checked, onChange, className = "", ...props }) {
  return (
    <label className={`inline-flex items-center cursor-pointer ${className}`}>
      <input type="checkbox" checked={checked} onChange={e => onChange(e.target.checked)} className="sr-only" {...props} />
      <span className={`w-10 h-6 flex items-center bg-gray-200 rounded-full p-1 ${checked ? "bg-primary" : ""}`}>
        <span className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${checked ? "translate-x-4" : ""}`}></span>
      </span>
    </label>
  );
}
