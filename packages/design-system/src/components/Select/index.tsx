import * as SelectPrimitive from '@radix-ui/react-select';
import * as React from 'react';

import styles from './Select.module.scss';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps {
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  options: SelectOption[];
  disabled?: boolean;
  invalid?: boolean;
  onValueChange?: (value: string) => void;
}

export const Select = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Trigger>,
  SelectProps
>(
  (
    {
      value,
      defaultValue,
      placeholder = 'Select...',
      options,
      disabled = false,
      invalid = false,
      onValueChange,
    },
    ref,
  ) => {
    return (
      <SelectPrimitive.Root
        value={value}
        defaultValue={defaultValue}
        onValueChange={onValueChange}
      >
        <SelectPrimitive.Trigger
          ref={ref}
          className={[styles.trigger, invalid && styles.invalid]
            .filter(Boolean)
            .join(' ')}
          disabled={disabled}
          aria-invalid={invalid || undefined}
        >
          <SelectPrimitive.Value placeholder={placeholder} />

          <SelectPrimitive.Icon className={styles.icon}>▾</SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>

        <SelectPrimitive.Portal>
          <SelectPrimitive.Content className={styles.content} position="popper">
            <SelectPrimitive.Viewport className={styles.viewport}>
              {options.map((option) => (
                <SelectPrimitive.Item
                  key={option.value}
                  value={option.value}
                  disabled={option.disabled}
                  className={styles.item}
                >
                  <SelectPrimitive.ItemText>
                    {option.label}
                  </SelectPrimitive.ItemText>

                  <SelectPrimitive.ItemIndicator className={styles.indicator}>
                    ✓
                  </SelectPrimitive.ItemIndicator>
                </SelectPrimitive.Item>
              ))}
            </SelectPrimitive.Viewport>
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
    );
  },
);

Select.displayName = 'Select';
