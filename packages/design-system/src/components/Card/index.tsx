import * as React from 'react';

import { Surface, type SurfaceVariant } from '../Surface';
import styles from './Card.module.scss';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  surface?: SurfaceVariant;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ surface = 'solid', className, children, ...props }, ref) => {
    const classes = [styles.card, className].filter(Boolean).join(' ');

    return (
      <Surface ref={ref} variant={surface} className={classes} {...props}>
        {children}
      </Surface>
    );
  },
);

Card.displayName = 'Card';
