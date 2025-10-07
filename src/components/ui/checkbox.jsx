import React from "react";

export const Checkbox = React.forwardRef(({ className = "", checked, onCheckedChange, ...props }, ref) => (
  <input
    type="checkbox"
    ref={ref}
    className={`form-checkbox h-5 w-5 text-primary ${className}`}
    checked={checked}
    onChange={e => {
      if (onCheckedChange) onCheckedChange(e.target.checked);
      if (props.onChange) props.onChange(e);
    }}
    {...props}
  />
));
Checkbox.displayName = "Checkbox";
