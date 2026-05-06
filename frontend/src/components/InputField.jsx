import { forwardRef } from 'react';

export const InputField = forwardRef(({ className = '', ...props }, ref) => {
  return (
    <input ref={ref} className={`input-field ${className}`.trim()} {...props} />
  );
});

InputField.displayName = 'InputField';
