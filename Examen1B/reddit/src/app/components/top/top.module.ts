import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopComponent } from './top/top.component';



@NgModule({
  declarations: [
    TopComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TopComponent
  ]
})
export class TopModule { }
