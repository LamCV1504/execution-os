import * as ToastPrimitive from '@radix-ui/react-toast';
import * as React from 'react';

import styles from './Toast.module.scss';

export const ToastProvider = ToastPrimitive.Provider;

export const ToastViewport = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Viewport>
>(({ className, ...props }, ref) => {
  const classes = [styles.viewport, className].filter(Boolean).join(' ');

  return <ToastPrimitive.Viewport ref={ref} className={classes} {...props} />;
});

ToastViewport.displayName = ToastPrimitive.Viewport.displayName;

export const Toast = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Root>
>(({ className, ...props }, ref) => {
  const classes = [styles.toast, className].filter(Boolean).join(' ');

  return <ToastPrimitive.Root ref={ref} className={classes} {...props} />;
});

Toast.displayName = ToastPrimitive.Root.displayName;

export const ToastTitle = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Title>
>(({ className, ...props }, ref) => {
  const classes = [styles.title, className].filter(Boolean).join(' ');

  return <ToastPrimitive.Title ref={ref} className={classes} {...props} />;
});

ToastTitle.displayName = ToastPrimitive.Title.displayName;

export const ToastDescription = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Description>
>(({ className, ...props }, ref) => {
  const classes = [styles.description, className].filter(Boolean).join(' ');

  return (
    <ToastPrimitive.Description ref={ref} className={classes} {...props} />
  );
});

ToastDescription.displayName = ToastPrimitive.Description.displayName;

export const ToastAction = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Action>
>(({ className, ...props }, ref) => {
  const classes = [styles.action, className].filter(Boolean).join(' ');

  return <ToastPrimitive.Action ref={ref} className={classes} {...props} />;
});

ToastAction.displayName = ToastPrimitive.Action.displayName;

export const ToastClose = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitive.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Close>
>(({ className, ...props }, ref) => {
  const classes = [styles.close, className].filter(Boolean).join(' ');

  return (
    <ToastPrimitive.Close
      ref={ref}
      className={classes}
      aria-label="Close"
      {...props}
    />
  );
});

ToastClose.displayName = ToastPrimitive.Close.displayName;
