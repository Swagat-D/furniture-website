import React, { useState, useRef, useEffect } from "react";

export function Dialog({ open, onOpenChange, children }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget && onOpenChange) {
      onOpenChange(false);
    }
  };

  return open ? (
    <div 
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
      onClick={handleBackdropClick}
      data-dialog-container="true"
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 1rem',
        minHeight: '100vh'
      }}
    >
      {React.Children.map(children, child =>
        React.cloneElement(child, { onOpenChange })
      )}
    </div>
  ) : null;
}

export function DialogTrigger({ asChild, children, ...props }) {
  return React.cloneElement(children, {
    ...props,
    onClick: (e) => {
      if (children.props.onClick) children.props.onClick(e);
      if (props.onClick) props.onClick(e);
      // Find the Dialog parent and trigger onOpenChange
      const dialogParent = e.target.closest('[data-dialog-container]');
      if (dialogParent && dialogParent.onOpenChange) {
        dialogParent.onOpenChange(true);
      }
    },
  });
}

export function DialogContent({ className = "", children }) {
  return (
    <div 
      className={`bg-white shadow-2xl border border-gray-100 p-6 sm:p-8 rounded-xl ${className}`}
      style={{ 
        width: '100%',
        maxWidth: '28rem',
        maxHeight: '90vh',
        overflowY: 'auto',
        position: 'relative',
        margin: 'auto',
        transform: 'translateY(0)',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)',
        animation: 'fadeInScale 0.2s ease-out'
      }}
    >
      {children}
    </div>
  );
}

export function DialogHeader({ children }) {
  return <div className="mb-4">{children}</div>;
}

export function DialogTitle({ className = "", children }) {
  return <h2 className={`font-bold ${className}`}>{children}</h2>;
}
