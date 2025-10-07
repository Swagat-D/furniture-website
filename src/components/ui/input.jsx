import React from "react";

export const Input = React.forwardRef(({ className = "", type = "text", ...props }, ref) => {
  return (
    <input
      ref={ref}
      type={type}
      className={`w-full px-4 py-3 text-base text-gray-900 border-2 border-gray-200 rounded-lg bg-white transition-all duration-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 hover:border-gray-300 placeholder:text-gray-400 ${className}`}
      {...props}
    />
  );
});
Input.displayName = "Input";
