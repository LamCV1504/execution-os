
    export type RemoteKeys = 'planning/App' | 'planning/module';
    type PackageType<T> = T extends 'planning/module' ? typeof import('planning/module') :T extends 'planning/App' ? typeof import('planning/App') :any;