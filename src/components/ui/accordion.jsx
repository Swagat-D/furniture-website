import React, { useState } from "react";

export function Accordion({ children }) {
  return <div className="border rounded divide-y">{children}</div>;
}

export function AccordionItem({ children }) {
  return <div className="p-2">{children}</div>;
}

export function AccordionTrigger({ children, ...props }) {
  return <button className="w-full text-left font-semibold" {...props}>{children}</button>;
}

export function AccordionContent({ children }) {
  return <div className="pt-2">{children}</div>;
}
