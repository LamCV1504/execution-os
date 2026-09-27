import {
  loadRemote,
  registerRemotes,
} from '@module-federation/enhanced/runtime';

import { type ComponentType, lazy } from 'react';

// The providers this consumer loads at runtime. Edit `entry` to point at a
// different URL (`remoteEntry.js` is what every supported bundler emits at dev
// + build time). `name` is the provider build's federation container name and
// must match the provider's federation `name`; `alias` is the key you pass to
// loadRemote()/lazyProvider().
export const PROVIDERS: Array<{ alias: string; name: string; entry: string }> =
  [
    {
      alias: 'planning',
      name: 'planning',
      entry: 'http://localhost:8101/remoteEntry.js',
    },
  ];

// `type` is omitted so the federation runtime auto-detects the entry format.
// The providers in this workspace are rspack-built and emit UMD;
// setting `type: 'module'` here breaks them with #RUNTIME-002.
registerRemotes(PROVIDERS.map((remote) => ({ ...remote })));

export function lazyProvider<Props = unknown>(
  alias: string,
  exposeName: string,
) {
  return lazy(async () => {
    const mod = await loadRemote(`${alias}/${exposeName}`);

    if (!mod) {
      throw new Error(
        `Remote "${alias}/${exposeName}" returned an empty module.`,
      );
    }

    const remoteModule = mod as {
      default?: ComponentType<Props>;
      App?: ComponentType<Props>;
    };

    const Component = remoteModule.default ?? remoteModule.App;

    if (!Component) {
      throw new Error(
        `Remote "${alias}/${exposeName}" did not expose a React component.`,
      );
    }

    return { default: Component };
  });
}

export async function loadProviderModule<T>(
  alias: string,
  exposeName: string,
): Promise<T> {
  const mod = await loadRemote<T>(`${alias}/${exposeName}`);

  if (!mod) {
    throw new Error(
      `Remote "${alias}/${exposeName}" did not expose "${exposeName}".`,
    );
  }

  return mod;
}

const providerComponentCache = new Map<
  string,
  ReturnType<typeof lazyProvider>
>();

export function lazyProviderByModule(moduleName: string) {
  const cached = providerComponentCache.get(moduleName);

  if (cached) {
    return cached;
  }

  const Provider = lazyProvider(moduleName, './App');

  providerComponentCache.set(moduleName, Provider);

  return Provider;
}
