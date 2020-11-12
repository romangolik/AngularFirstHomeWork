import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';
import { TestRouting } from './test.routing';

@NgModule({
  declarations: [ TestComponent ],
  imports: [
    TestRouting,
    CommonModule,
  ],
  exports: [ TestComponent ]
})
export class TestModule { }
