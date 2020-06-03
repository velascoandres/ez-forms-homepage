import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GettingStartedRoutingModule } from './getting-started-routing.module';
import { InstallationComponent } from './routes/installation/installation.component';
import { TitleModule } from 'src/app/components/title/title.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [InstallationComponent],
  imports: [
    CommonModule,
    GettingStartedRoutingModule,
    TitleModule,
    SharedModule,
  ]
})
export class GettingStartedModule { }
