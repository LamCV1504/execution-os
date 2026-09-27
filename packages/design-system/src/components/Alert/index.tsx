import * as React from 'react';

import styles from './Alert.module.scss';

export type AlertVariant = 'info' | 'success' | 'warning' | 'danger';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: AlertVariant;
  title?: string;
}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ variant = 'info', title, className, children, ...props }, ref) => {
    const classes = [styles.alert, styles[variant], className]
      .filter(Boolean)
      .join(' ');

    return (
      <div ref={ref} className={classes} role="alert" {...props}>
        <div className={styles.icon} aria-hidden="true">
          {variant === 'success' && '✓'}
          {variant === 'warning' && '!'}
          {variant === 'danger' && '×'}
          {variant === 'info' && 'i'}
        </div>

        <div className={styles.body}>
          {title && <div className={styles.title}>{title}</div>}

          <div className={styles.description}>{children}</div>
        </div>
      </div>
    );
  },
);

Alert.displayName = 'Alert';
