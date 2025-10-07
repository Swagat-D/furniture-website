import React from "react";

export const Card = ({ className = "", children, ...props }) => (
  <div className={`bg-white rounded shadow p-4 ${className}`} {...props}>
    {children}
  </div>
);

export const CardHeader = ({ className = "", children, ...props }) => (
  <div className={`pb-4 ${className}`} {...props}>
    {children}
  </div>
);

export const CardContent = ({ className = "", children, ...props }) => (
  <div className={`${className}`} {...props}>
    {children}
  </div>
);

export const CardTitle = ({ className = "", children, ...props }) => (
  <h3 className={`text-lg font-semibold ${className}`} {...props}>
    {children}
  </h3>
);
