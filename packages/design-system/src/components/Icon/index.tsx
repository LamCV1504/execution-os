import type { IconProps as PhosphorIconProps } from '@phosphor-icons/react';
import {
  ChartBarIcon,
  CalendarIcon,
  CheckIcon,
  FlagIcon,
  HouseIcon,
  ListIcon,
  TargetIcon,
  TimerIcon,
} from '@phosphor-icons/react';

export type IconName =
  | 'home'
  | 'target'
  | 'flag'
  | 'check'
  | 'list'
  | 'timer'
  | 'calendar'
  | 'bar-chart';

const icons = {
  home: HouseIcon,
  target: TargetIcon,
  flag: FlagIcon,
  check: CheckIcon,
  list: ListIcon,
  timer: TimerIcon,
  calendar: CalendarIcon,
  'bar-chart': ChartBarIcon,
} as const;

export type IconVariant = PhosphorIconProps['weight'];

export interface IIconProps {
  name: IconName;
  variant?: IconVariant;
  size?: number;
}

export function Icon({ name, variant = 'regular', size = 18 }: IIconProps) {
  const IconComponent = icons[name];

  return <IconComponent size={size} weight={variant} aria-hidden="true" />;
}
