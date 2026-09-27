import * as React from 'react';

import styles from './Heading.module.scss';

export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4';
export type HeadingSize = 'sm' | 'md' | 'lg' | 'xl';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: HeadingLevel;
  size?: HeadingSize;
}

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ as: Component = 'h2', size = 'md', className, ...props }, ref) => {
    const classes = [styles.heading, styles[size], className]
      .filter(Boolean)
      .join(' ');

    return <Component ref={ref} className={classes} {...props} />;
  },
);

Heading.displayName = 'Heading';
