import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import * as React from 'react';

import styles from './Tooltip.module.scss';

export const TooltipProvider = TooltipPrimitive.Provider;

export const Tooltip = TooltipPrimitive.Root;

export const TooltipTrigger = React.forwardRef<
  React.ComponentRef<typeof TooltipPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Trigger>
>(({ className, ...props }, ref) => {
  const classes = [styles.trigger, className].filter(Boolean).join(' ');

  return <TooltipPrimitive.Trigger ref={ref} className={classes} {...props} />;
});

TooltipTrigger.displayName = TooltipPrimitive.Trigger.displayName;

export const TooltipContent = React.forwardRef<
  React.ComponentRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 6, children, ...props }, ref) => {
  const classes = [styles.content, className].filter(Boolean).join(' ');

  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        ref={ref}
        className={classes}
        sideOffset={sideOffset}
        {...props}
      >
        {children}

        <TooltipPrimitive.Arrow className={styles.arrow} />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
});

TooltipContent.displayName = TooltipPrimitive.Content.displayName;
