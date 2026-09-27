import { useEffect, useState, type ReactNode } from 'react';
import { startPlanningMocks } from '../mocks/start-browser';

interface IPlanningRuntimeProps {
  children: ReactNode;
}

export function PlanningRuntime({ children }: IPlanningRuntimeProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    void startPlanningMocks().then(() => {
      setReady(true);
    });
  }, []);

  if (!ready) {
    return <div>Starting Planning...</div>;
  }

  return children;
}
