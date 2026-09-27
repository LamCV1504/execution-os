import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as React from 'react';

import styles from './Dialog.module.scss';

export const Dialog = DialogPrimitive.Root;

export const DialogTrigger = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Trigger>
>(({ className, ...props }, ref) => {
  const classes = [styles.trigger, className].filter(Boolean).join(' ');

  return <DialogPrimitive.Trigger ref={ref} className={classes} {...props} />;
});

DialogTrigger.displayName = DialogPrimitive.Trigger.displayName;

export const DialogPortal = DialogPrimitive.Portal;

export const DialogOverlay = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => {
  const classes = [styles.overlay, className].filter(Boolean).join(' ');

  return <DialogPrimitive.Overlay ref={ref} className={classes} {...props} />;
});

DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

export const DialogContent = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => {
  const classes = [styles.content, className].filter(Boolean).join(' ');

  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content ref={ref} className={classes} {...props}>
        {children}

        <DialogPrimitive.Close className={styles.close} aria-label="Close">
          ×
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPortal>
  );
});

DialogContent.displayName = DialogPrimitive.Content.displayName;

export const DialogTitle = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => {
  const classes = [styles.title, className].filter(Boolean).join(' ');

  return <DialogPrimitive.Title ref={ref} className={classes} {...props} />;
});

DialogTitle.displayName = DialogPrimitive.Title.displayName;

export const DialogDescription = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => {
  const classes = [styles.description, className].filter(Boolean).join(' ');

  return (
    <DialogPrimitive.Description ref={ref} className={classes} {...props} />
  );
});

DialogDescription.displayName = DialogPrimitive.Description.displayName;

export const DialogClose = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Close>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Close>
>(({ className, ...props }, ref) => {
  const classes = [styles.closeAction, className].filter(Boolean).join(' ');

  return <DialogPrimitive.Close ref={ref} className={classes} {...props} />;
});

DialogClose.displayName = DialogPrimitive.Close.displayName;
