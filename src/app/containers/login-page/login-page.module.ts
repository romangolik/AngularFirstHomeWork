import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page.component';
import { LoginPageRouting } from './login-page.routing';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../rest/auth/auth.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ LoginPageComponent ],
  imports: [
    FormsModule,
    CommonModule,
    LoginPageRouting,
    HttpClientModule,
  ],
  providers: [ AuthService ],
  exports: [ LoginPageComponent ]
})
export class LoginPageModule { }
