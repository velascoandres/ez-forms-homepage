import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TextComponent } from './routes/text/text.component';
import { FileComponent } from './routes/file/file.component';
import { CheckboxComponent } from './routes/checkbox/checkbox.component';
import { RadioButtonComponent } from './routes/radio-button/radio-button.component';
import { SelectComponent } from './routes/select/select.component';
import { DateComponent } from './routes/date/date.component';
import { AutoCompleteComponent } from './routes/auto-complete/auto-complete.component';


const routes: Routes = [
  {
    path: 'text-input',
    component: TextComponent,
  },
  {
    path: 'autoComplete',
    component: AutoCompleteComponent,
  },
  {
    path: 'date-input',
    component: DateComponent,
  },
  {
    path: 'select',
    component: SelectComponent,
  },
  {
    path: 'radio-button',
    component: RadioButtonComponent,
  },
  {
    path: 'checkbox',
    component: CheckboxComponent,
  },
  {
    path: 'files',
    component: FileComponent,
  },
  {
    path: '',
    redirectTo: 'text-input',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormControlsRoutingModule { }
