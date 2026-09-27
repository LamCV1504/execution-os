export interface IModuleRoute {
  basePath: string;
  title: string;
}

export interface IModuleDefinition {
  name: string;
  route: IModuleRoute;
  appExpose: string;
}
