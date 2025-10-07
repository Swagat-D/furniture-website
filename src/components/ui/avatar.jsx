import React from "react";

export function Avatar({ src, alt, className = "w-10 h-10 rounded-full object-cover", ...props }) {
  return <img src={src} alt={alt} className={className} {...props} />;
}
