import React, { forwardRef } from 'react';

export const Input = forwardRef(({ className = '', error, label, helperText, id, ...props }, ref) => {
  const generatedId = id || Math.random().toString(36).substring(7);
  
  return (
    <div className="w-full flex flex-col gap-1.5">
      {label && (
        <label htmlFor={generatedId} className="text-sm font-semibold text-text-primary">
          {label}
        </label>
      )}
      <input
        id={generatedId}
        ref={ref}
        className={`
          w-full px-4 py-2.5 bg-surface border rounded-md text-base text-text-primary placeholder:text-text-muted transition-colors
          focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
          disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-surface-muted
          ${error ? 'border-error focus:ring-error' : 'border-border hover:border-border-hover'}
          ${className}
        `}
        {...props}
      />
      {error && <p className="text-sm text-error mt-1">{error}</p>}
      {!error && helperText && <p className="text-sm text-text-secondary mt-1">{helperText}</p>}
    </div>
  );
});

Input.displayName = 'Input';

export const Textarea = forwardRef(({ className = '', error, label, helperText, id, ...props }, ref) => {
  const generatedId = id || Math.random().toString(36).substring(7);
  
  return (
    <div className="w-full flex flex-col gap-1.5">
      {label && (
        <label htmlFor={generatedId} className="text-sm font-semibold text-text-primary">
          {label}
        </label>
      )}
      <textarea
        id={generatedId}
        ref={ref}
        className={`
          w-full px-4 py-3 bg-surface border rounded-md text-base text-text-primary placeholder:text-text-muted transition-colors resize-y min-h-[100px]
          focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
          disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-surface-muted
          ${error ? 'border-error focus:ring-error' : 'border-border hover:border-border-hover'}
          ${className}
        `}
        {...props}
      />
      {error && <p className="text-sm text-error mt-1">{error}</p>}
      {!error && helperText && <p className="text-sm text-text-secondary mt-1">{helperText}</p>}
    </div>
  );
});

Textarea.displayName = 'Textarea';
