import { Slot } from '@radix-ui/react-slot';
import * as React from 'react';

import styles from './Surface.module.scss';

export type SurfaceVariant = 'solid' | 'glass' | 'frost';

export interface SurfaceProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: SurfaceVariant;
  asChild?: boolean;
}

export const Surface = React.forwardRef<HTMLDivElement, SurfaceProps>(
  ({ variant = 'solid', asChild = false, className, ...props }, ref) => {
    const Component = asChild ? Slot : 'div';

    const classes = [styles.surface, styles[variant], className]
      .filter(Boolean)
      .join(' ');

    return <Component ref={ref} className={classes} {...props} />;
  },
);

Surface.displayName = 'Surface';
