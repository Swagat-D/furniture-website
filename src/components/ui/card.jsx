import React from "react";

export const Card = ({ className = "", children, ...props }) => (
  <div className={`bg-white rounded shadow p-4 ${className}`} {...props}>
    {children}
  </div>
);
