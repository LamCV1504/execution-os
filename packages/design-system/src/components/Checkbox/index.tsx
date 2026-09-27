import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as React from 'react';

import styles from './Checkbox.module.scss';

export interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {}

export const Checkbox = React.forwardRef<
  React.ComponentRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, ...props }, ref) => {
  const classes = [styles.checkbox, className].filter(Boolean).join(' ');

  return (
    <CheckboxPrimitive.Root ref={ref} className={classes} {...props}>
      <CheckboxPrimitive.Indicator className={styles.indicator}>
        ✓
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
});

Checkbox.displayName = 'Checkbox';
