import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormControlsRoutingModule } from './form-controls-routing.module';
import { TextComponent } from './routes/text/text.component';
import { AutoCompleteComponent } from './routes/auto-complete/auto-complete.component';
import { DateComponent } from './routes/date/date.component';
import { SelectComponent } from './routes/select/select.component';
import { CheckboxComponent } from './routes/checkbox/checkbox.component';
import { FileComponent } from './routes/file/file.component';
import { RadioButtonComponent } from './routes/radio-button/radio-button.component';
import { TitleModule } from 'src/app/components/title/title.module';
import { SharedModule } from '../shared/shared.module';
import { TextFormComponent } from './components/text-form/text-form.component';


@NgModule({
  declarations: [
    TextComponent,
    AutoCompleteComponent,
    DateComponent,
    SelectComponent,
    CheckboxComponent,
    FileComponent,
    RadioButtonComponent,
    TextFormComponent,
  ],
  imports: [
    CommonModule,
    FormControlsRoutingModule,
    TitleModule,
    SharedModule,
  ]
})
export class FormControlsModule { }
