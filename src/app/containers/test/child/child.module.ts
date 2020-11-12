import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child.component';
import { ChildRouting } from './child.routing';



@NgModule({
  declarations: [ ChildComponent ],
  imports: [
    CommonModule,
    ChildRouting
  ],
  exports: [ ChildComponent ]
})
export class ChildModule { }
