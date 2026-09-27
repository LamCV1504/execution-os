export interface IModuleDefinition {
  name: string;
  basePath: string;
  entry: string;
  exposedModule: string;
}

export const modules: IModuleDefinition[] = [
  {
    name: 'planning',
    basePath: '/planning',
    entry: 'http://localhost:8101/remoteEntry.js',
    exposedModule: './App',
  },
];
