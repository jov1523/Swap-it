import { forwardRef } from 'react';

export const Button = forwardRef(({ children, className = '', ...props }, ref) => {
  return (
    <button ref={ref} className={`button ${className}`.trim()} {...props}>
      {children}
    </button>
  );
});

Button.displayName = 'Button';
