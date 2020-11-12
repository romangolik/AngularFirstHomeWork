import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  user = {
    mail: '',
    password: ''
  }

  constructor(private routerTo: Router) {}

  loginUser() {
    localStorage.setItem('token', JSON.stringify(this.user));
    this.routerTo.navigateByUrl('/');
  }
}
