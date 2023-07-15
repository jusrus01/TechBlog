import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinebreakPipe } from './pipes/linebreak.pipe';

@NgModule({
  declarations: [
    LinebreakPipe
  ],
  exports: [
    LinebreakPipe
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
