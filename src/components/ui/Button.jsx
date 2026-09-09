import React from 'react';
import { Link } from 'react-router-dom';

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  href, 
  to,
  icon: Icon,
  disabled,
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-primary text-text-inverse hover:bg-primary-hover active:bg-primary-active border border-transparent shadow-subtle",
    secondary: "bg-secondary text-text-inverse hover:bg-secondary-hover active:bg-secondary border border-transparent shadow-subtle",
    outline: "bg-transparent text-text-primary border border-border hover:bg-surface-muted hover:border-border-hover active:bg-border",
    ghost: "bg-transparent text-text-secondary hover:text-text-primary hover:bg-surface-muted active:bg-border border border-transparent",
    destructive: "bg-error text-text-inverse hover:bg-red-600 active:bg-red-700 border border-transparent shadow-subtle"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm rounded-md gap-1.5",
    md: "px-4 py-2 text-base rounded-md gap-2",
    lg: "px-6 py-3 text-lg rounded-lg gap-2.5",
    icon: "p-2 rounded-md"
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {children}
      {Icon && <Icon className={size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : 'w-5 h-5'} />}
    </>
  );

  if (to) {
    return <Link to={to} className={classes} {...props}>{content}</Link>;
  }

  if (href) {
    return <a href={href} className={classes} {...props}>{content}</a>;
  }

  return (
    <button disabled={disabled} className={classes} {...props}>
      {content}
    </button>
  );
}
