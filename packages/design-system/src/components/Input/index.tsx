import * as React from 'react';

import styles from './Input.module.scss';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ invalid = false, className, ...props }, ref) => {
    const classes = [styles.input, invalid && styles.invalid, className]
      .filter(Boolean)
      .join(' ');

    return (
      <input
        ref={ref}
        className={classes}
        aria-invalid={invalid || undefined}
        {...props}
      />
    );
  },
);

Input.displayName = 'Input';
