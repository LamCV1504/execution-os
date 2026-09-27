import { Label } from '@radix-ui/react-label';
import * as React from 'react';

import styles from './Field.module.scss';

export interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
  name?: string;
  controlId?: string;
  label?: string;
  description?: string;
  error?: string;
}

export const Field = React.forwardRef<HTMLDivElement, FieldProps>(
  (
    {
      name,
      controlId,
      label,
      description,
      error,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const resolvedControlId = controlId ?? name;

    const classes = [styles.field, className].filter(Boolean).join(' ');

    return (
      <div ref={ref} className={classes} {...props}>
        {label && resolvedControlId && (
          <Label className={styles.label} htmlFor={resolvedControlId}>
            {label}
          </Label>
        )}

        {description && <div className={styles.description}>{description}</div>}

        {children}

        {error && (
          <div className={styles.error} role="alert">
            {error}
          </div>
        )}
      </div>
    );
  },
);

Field.displayName = 'Field';
