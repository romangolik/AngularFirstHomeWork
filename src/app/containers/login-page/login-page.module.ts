import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page.component';
import { LoginPageRouting } from './login-page.routing';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ LoginPageComponent ],
  imports: [
    FormsModule,
    CommonModule,
    LoginPageRouting
  ],
  exports: [ LoginPageComponent ]
})
export class LoginPageModule { }
