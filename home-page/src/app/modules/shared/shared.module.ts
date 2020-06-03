import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { getHighlightLanguages } from 'src/app/constants/languajes';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HighlightModule,
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
  ]
})
export class SharedModule { }
