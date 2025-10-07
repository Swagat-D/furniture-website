import React, { useState } from "react";

export function Tabs({ defaultValue, children, className = "" }) {
  const [active, setActive] = useState(defaultValue);
  return (
    <div className={className}>
      {React.Children.map(children, child =>
        React.cloneElement(child, {
          active,
          setActive,
        })
      )}
    </div>
  );
}

export function TabsList({ children }) {
  return <div className="flex gap-2 border-b mb-2">{children}</div>;
}

export function TabsTrigger({ value, active, setActive, children }) {
  return (
    <button
      className={`px-4 py-2 ${active === value ? "border-b-2 border-primary font-bold" : "text-muted-foreground"}`}
      onClick={() => setActive(value)}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, active, children }) {
  return active === value ? <div>{children}</div> : null;
}
