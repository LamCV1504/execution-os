import { useParams } from '@tanstack/react-router';

import { lazyProvider } from '../../mf';

export function ModuleHost() {
  const { module } = useParams({
    from: '/$module',
  });

  const Provider = lazyProvider(module, './App');

  return <Provider />;
}
