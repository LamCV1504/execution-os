import * as React from 'react';

import styles from './Badge.module.scss';

export type BadgeVariant =
  | 'neutral'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger';

export type BadgeSize = 'sm' | 'md';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = 'neutral', size = 'md', className, ...props }, ref) => {
    const classes = [styles.badge, styles[variant], styles[size], className]
      .filter(Boolean)
      .join(' ');

    return <span ref={ref} className={classes} {...props} />;
  },
);

Badge.displayName = 'Badge';
