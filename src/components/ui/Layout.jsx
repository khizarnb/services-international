import React from 'react';

export function Section({ children, className = '', variant = 'default', ...props }) {
  const variants = {
    default: "bg-surface text-text-primary",
    muted: "bg-surface-muted text-text-primary",
    inverse: "bg-secondary text-text-inverse",
    primary: "bg-primary text-text-inverse",
  };

  return (
    <section className={`py-16 md:py-24 ${variants[variant]} ${className}`} {...props}>
      {children}
    </section>
  );
}

export function Container({ children, className = '', size = 'lg', ...props }) {
  const sizes = {
    sm: "max-w-3xl",
    md: "max-w-5xl",
    lg: "max-w-7xl",
    xl: "max-w-[1400px]",
    full: "max-w-none"
  };

  return (
    <div className={`mx-auto px-4 sm:px-6 lg:px-8 w-full ${sizes[size]} ${className}`} {...props}>
      {children}
    </div>
  );
}
