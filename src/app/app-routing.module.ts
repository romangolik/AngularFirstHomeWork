import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./containers/portal/portal.module').then(u => u.PortalModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./containers/admin-page/admin-page.module').then(u => u.AdminPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
