import type { INavigationSection } from '@execution-os/contracts';
import type { IconName } from '@execution-os/design-system';

export const navigationSections: INavigationSection<IconName>[] = [
  {
    id: 'planning',
    label: 'Planning',
    items: [
      {
        id: 'planning-overview',
        label: 'Overview',
        path: '/',
        icon: 'home',
      },
      {
        id: 'goals',
        label: 'Goals',
        path: '/goals',
        icon: 'target',
      },
      {
        id: 'milestones',
        label: 'Milestones',
        path: '/milestones',
        icon: 'flag',
      },
      {
        id: 'tasks',
        label: 'Tasks',
        path: '/tasks',
        icon: 'check',
      },
      {
        id: 'working-units',
        label: 'Working Units',
        path: '/working-units',
        icon: 'list',
      },
    ],
  },
  {
    id: 'execution',
    label: 'Execution',
    items: [
      {
        id: 'focus',
        label: 'Focus',
        path: '/focus',
        icon: 'calendar',
      },
    ],
  },
  {
    id: 'insights',
    label: 'Insights',
    items: [
      {
        id: 'analytics',
        label: 'Analytics',
        path: '/analytics',
        icon: 'bar-chart',
      },
    ],
  },
];
