import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GETTING_STARTED_LAZY_ROUTES } from './modules/getting-started/constants/lazy-routes';
import { FORMS_CONTROLS_LAZY_ROUTES } from './modules/form-controls/constants/lazy-routes';


const routes: Routes = [
  ...GETTING_STARTED_LAZY_ROUTES,
  ...FORMS_CONTROLS_LAZY_ROUTES,
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
