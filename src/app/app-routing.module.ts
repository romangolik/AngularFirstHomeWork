import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizationCheckGuard } from './auth/authorization-check.guard';
import { OpenLoginFormGuard } from './auth/open-login-form.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [ AuthorizationCheckGuard ],
    loadChildren: () => import('./containers/portal/portal.module').then(u => u.PortalModule)
  },
  {
    path: 'login',
    canActivate: [ OpenLoginFormGuard ],
    loadChildren: () => import('./containers/login-page/login-page.module').then(u => u.LoginPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
