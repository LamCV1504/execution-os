import { IModuleDefinition } from '@execution-os/contracts';

export const planningModule: IModuleDefinition = {
  name: 'planning',
  route: {
    basePath: '/planning',
    title: 'Planning',
  },
  appExpose: './App',
};
