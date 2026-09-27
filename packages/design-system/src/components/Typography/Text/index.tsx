import * as React from 'react';

import styles from './Text.module.scss';

export type TextSize = 'xs' | 'sm' | 'md' | 'lg';
export type TextTone = 'primary' | 'secondary' | 'muted' | 'danger';

export interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: TextSize;
  tone?: TextTone;
}

export const Text = React.forwardRef<HTMLSpanElement, TextProps>(
  ({ size = 'md', tone = 'primary', className, ...props }, ref) => {
    const classes = [styles.text, styles[size], styles[tone], className]
      .filter(Boolean)
      .join(' ');

    return <span ref={ref} className={classes} {...props} />;
  },
);

Text.displayName = 'Text';
