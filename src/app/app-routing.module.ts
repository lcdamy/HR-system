import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
}, {
  path: 'login',
  loadChildren: () => import('./components/human-login/human-login.module').then(_ => _.HumanLoginModule),
  canActivate: [AuthGuard]
}, {
  path: 'dashboard',
  loadChildren: () => import('./components/human-dashboard/human-dashboard.module').then(_ => _.DashboardModule),
  canActivate: [AuthGuard]
}];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
