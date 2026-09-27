import type { ReactNode } from 'react';
import { Provider } from 'react-redux';

import { store } from '../store/store';

interface IPlanningProviderProps {
  children: ReactNode;
}

export function PlanningProvider({ children }: IPlanningProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}
