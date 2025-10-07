import React from "react";

export function RadioGroup({ value, onChange, children, className = "", ...props }) {
  return (
    <div className={`flex gap-2 ${className}`} {...props}>
      {React.Children.map(children, child =>
        React.cloneElement(child, {
          checked: child.props.value === value,
          onChange: () => onChange(child.props.value),
        })
      )}
    </div>
  );
}

export function RadioGroupItem({ value, checked, onChange, children, ...props }) {
  return (
    <label className="flex items-center gap-1 cursor-pointer">
      <input type="radio" value={value} checked={checked} onChange={onChange} {...props} />
      {children}
    </label>
  );
}
