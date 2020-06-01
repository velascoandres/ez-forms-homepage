
export const GETTING_STARTED_LAZY_ROUTES = [
  {
    path: `getting-started`, loadChildren: () =>
      import('../getting-started.module').then(m => m.GettingStartedModule)
  },
];
