
export const FORMS_CONTROLS_LAZY_ROUTES = [
  {
    path: `form-controls`, loadChildren: () =>
      import('../form-controls.module').then(m => m.FormControlsModule)
  },
];
