import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { getHighlightLanguages } from 'src/app/constants/languajes';
import { HighlightPlusModule } from 'ngx-highlightjs/plus';
import { EzFormModule } from '@gordon_freeman/ez-form';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HighlightModule,
    HighlightPlusModule,
    MatTabsModule,
    EzFormModule,
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        languages: getHighlightLanguages()
      }
    }
  ],
  exports: [
    HighlightModule,
    HighlightPlusModule,
    EzFormModule,
    MatTabsModule,
  ]
})
export class SharedModule { }
