import React, { useState } from "react";

export function Sheet({ open, onOpenChange, children }) {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget && onOpenChange) {
      onOpenChange(false);
    }
  };

  return open ? (
    <div 
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
      onClick={handleBackdropClick}
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0,
        display: 'flex',
        alignItems: 'stretch',
        justifyContent: 'flex-end'
      }}
    >
      {React.Children.map(children, child =>
        React.cloneElement(child, { onOpenChange })
      )}
    </div>
  ) : null;
}

export function SheetTrigger({ asChild, children, ...props }) {
  return React.cloneElement(children, {
    ...props,
    onClick: (e) => {
      if (children.props.onClick) children.props.onClick(e);
      if (props.onClick) props.onClick(e);
    },
  });
}

export function SheetContent({ className = "", children, side = "right" }) {
  const handleContentClick = (e) => {
    e.stopPropagation(); // Prevent backdrop click when clicking inside content
  };

  return (
    <div 
      className={`bg-white shadow-2xl border-l border-gray-200 ${className}`}
      onClick={handleContentClick}
      style={{ 
        height: '100vh',
        position: 'relative',
        overflowY: 'auto',
        borderRadius: '1rem 0 0 1rem',
        boxShadow: '-10px 0 50px -12px rgba(0, 0, 0, 0.25)',
        animation: 'slideInFromRight 0.3s ease-out'
      }}
    >
      {children}
    </div>
  );
}

export function SheetHeader({ children }) {
  return <div className="mb-4">{children}</div>;
}

export function SheetTitle({ className = "", children }) {
  return <h2 className={`font-bold ${className}`}>{children}</h2>;
}
