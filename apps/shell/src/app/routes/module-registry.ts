import type { IModuleDefinition } from '@execution-os/contracts';
import { loadProviderModule, PROVIDERS } from '../../mf';

const moduleCache = new Map<string, IModuleDefinition>();

export async function resolveModule(name: string): Promise<IModuleDefinition> {
  const cached = moduleCache.get(name);

  if (cached) {
    return cached;
  }

  const provider = PROVIDERS.find((item) => item.alias === name);

  if (!provider) {
    throw new Error(`Unknown MFE module "${name}".`);
  }

  const definition = await loadProviderModule<IModuleDefinition>(
    provider.alias,
    './module',
  );

  moduleCache.set(name, definition);

  return definition;
}
