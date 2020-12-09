import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../rest/auth/auth.service';
import { UserInfo } from '../../rest/auth/userinfo';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  userInfo: UserInfo = {
    mail: '',
    password: ''
  }

  constructor(private routerTo: Router,
              private authService: AuthService) {}

  loginUser() {
    this.authService.authorization(this.userInfo)
      .subscribe(
        result => {
          localStorage.setItem('token', result.token);
          this.routerTo.navigateByUrl('/');
        },
        error => console.log(error));
  }
}
