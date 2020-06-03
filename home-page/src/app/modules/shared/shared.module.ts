import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { getHighlightLanguages } from 'src/app/constants/languajes';
import { HighlightPlusModule } from 'ngx-highlightjs/plus';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HighlightModule,
    HighlightPlusModule,
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
  ]
})
export class SharedModule { }
