import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {  DashboardModule } from './dashboard/dashboard.module';
import { ProfileModule } from './profile/profile.module';
import { AuthComponent } from './core/auth/auth.component';

const routes: Routes = [
    {
      path: 'dashboard',
      loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
      path: 'user',
      loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
    },
    {
      path: 'auth',
      component:AuthComponent
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
