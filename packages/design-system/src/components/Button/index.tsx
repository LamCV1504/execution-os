import { Slot } from '@radix-ui/react-slot';
import * as React from 'react';

import styles from './Button.module.scss';

export type ButtonVariant = 'primary' | 'secondary' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = 'primary', size = 'md', asChild = false, className, ...props },
    ref,
  ) => {
    const Component = asChild ? Slot : 'button';

    const classes = [styles.button, styles[variant], styles[size], className]
      .filter(Boolean)
      .join(' ');

    return <Component ref={ref} className={classes} {...props} />;
  },
);

Button.displayName = 'Button';
