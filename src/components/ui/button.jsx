import React from "react";

export const Button = React.forwardRef(({ className = "", variant = "default", size = "md", onClick, ...props }, ref) => {
  const base = "inline-flex items-center justify-center font-medium rounded transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    ghost: "bg-transparent hover:bg-accent hover:text-accent-foreground",
    link: "underline text-primary px-0 hover:text-primary/80",
  };
  const sizes = {
    sm: "h-8 px-3 text-sm",
    md: "h-10 px-4 text-base",
    lg: "h-12 px-6 text-lg",
    icon: "h-10 w-10",
  };
  return (
    <button
      ref={ref}
      className={`${base} ${variants[variant] || variants.default} ${sizes[size] || sizes.md} ${className}`}
      onClick={onClick}
      {...props}
    />
  );
});
Button.displayName = "Button";
