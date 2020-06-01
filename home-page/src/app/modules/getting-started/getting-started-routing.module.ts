import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MENU_ITEMS } from 'src/app/constants/menu-items';
import { InstallationComponent } from './routes/installation/installation.component';


const routes: Routes = [
  {
    path: 'installation',
    component: InstallationComponent,
  },
  {
    path: '',
    redirectTo: 'installation',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GettingStartedRoutingModule { }
