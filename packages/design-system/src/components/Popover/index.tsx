import * as PopoverPrimitive from '@radix-ui/react-popover';
import * as React from 'react';

import styles from './Popover.module.scss';

export const Popover = PopoverPrimitive.Root;

export const PopoverTrigger = React.forwardRef<
  React.ComponentRef<typeof PopoverPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Trigger>
>(({ className, ...props }, ref) => {
  const classes = [styles.trigger, className].filter(Boolean).join(' ');

  return <PopoverPrimitive.Trigger ref={ref} className={classes} {...props} />;
});

PopoverTrigger.displayName = PopoverPrimitive.Trigger.displayName;

export const PopoverAnchor = PopoverPrimitive.Anchor;

export const PopoverPortal = PopoverPrimitive.Portal;

export const PopoverContent = React.forwardRef<
  React.ComponentRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, sideOffset = 8, children, ...props }, ref) => {
  const classes = [styles.content, className].filter(Boolean).join(' ');

  return (
    <PopoverPortal>
      <PopoverPrimitive.Content
        ref={ref}
        className={classes}
        sideOffset={sideOffset}
        {...props}
      >
        {children}

        <PopoverPrimitive.Arrow className={styles.arrow} />
      </PopoverPrimitive.Content>
    </PopoverPortal>
  );
});

PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export const PopoverClose = React.forwardRef<
  React.ComponentRef<typeof PopoverPrimitive.Close>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Close>
>(({ className, ...props }, ref) => {
  const classes = [styles.close, className].filter(Boolean).join(' ');

  return <PopoverPrimitive.Close ref={ref} className={classes} {...props} />;
});

PopoverClose.displayName = PopoverPrimitive.Close.displayName;
