import React from "react";

export function Slider({ min = 0, max = 100, value, onChange, step = 1, className = "", ...props }) {
  return (
    <input
      type="range"
      min={min}
      max={max}
      value={value}
      step={step}
      onChange={onChange}
      className={`w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer ${className}`}
      {...props}
    />
  );
}
